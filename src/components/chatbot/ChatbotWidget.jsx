import { Fragment, useEffect, useRef, useState } from "react";
import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport } from "ai";
import {
  Badge,
  Box,
  Button,
  Divider,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  Flex,
  Heading,
  HStack,
  IconButton,
  Input,
  Link,
  SkeletonText,
  Stack,
  Text,
  useBreakpointValue,
  useDisclosure,
} from "@chakra-ui/react";
import { ChatIcon } from "@chakra-ui/icons";
import { MdSend } from "react-icons/md";
import { businessInfo } from "@/lib/chatbot/knowledge";

const chatTransport = new DefaultChatTransport({
  api: "/api/chat",
});

const starterPrompts = [
  "What are your hours?",
  "How can I order pickup or delivery?",
  "How do I contact the restaurant?",
];

const markdownLinkPattern = /\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/gi;
const rawUrlPattern = /https?:\/\/[^\s]+/gi;
const emailPattern = /\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b/gi;
const phonePattern =
  /(?:\+?1[-.\s]?)?(?:\(\d{3}\)|\d{3})[-.\s]\d{3}[-.\s]\d{4}\b/g;
const richTextPattern =
  /\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)|(https?:\/\/[^\s]+)|(\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b)|((?:\+?1[-.\s]?)?(?:\(\d{3}\)|\d{3})[-.\s]\d{3}[-.\s]\d{4}\b)/gi;

function sanitizeMarkdown(text) {
  return text
    .replace(/\*\*(.*?)\*\*/g, "$1")
    .replace(/__(.*?)__/g, "$1")
    .replace(/`([^`]+)`/g, "$1")
    .replace(/^\s*[-*]\s+/gm, "• ");
}

function trimTrailingPunctuation(value) {
  return value.replace(/[),.;!?]+$/g, "");
}

function formatTelHref(phone) {
  const digits = phone.replace(/[^\d+]/g, "");
  return digits ? `tel:${digits}` : "#";
}

function renderRichText(text, keyPrefix, color) {
  const normalized = sanitizeMarkdown(text);
  const lines = normalized.split("\n");

  return lines.map((line, lineIndex) => {
    const parts = [];
    let lastIndex = 0;

    line.replace(
      richTextPattern,
      (match, markdownLabel, markdownHref, rawUrl, email, phone, offset) => {
        if (lastIndex < offset) {
          parts.push({
            type: "text",
            value: line.slice(lastIndex, offset),
          });
        }

        if (markdownLabel && markdownHref) {
          parts.push({
            type: "link",
            label: markdownLabel,
            href: markdownHref,
          });
        } else if (rawUrl) {
          const href = trimTrailingPunctuation(rawUrl);
          const trailing = rawUrl.slice(href.length);

          parts.push({
            type: "link",
            label: href,
            href,
          });

          if (trailing) {
            parts.push({
              type: "text",
              value: trailing,
            });
          }
        } else if (email) {
          parts.push({
            type: "link",
            label: email,
            href: `mailto:${email}`,
          });
        } else if (phone) {
          parts.push({
            type: "link",
            label: phone,
            href: formatTelHref(phone),
          });
        }

        lastIndex = offset + match.length;
        return match;
      },
    );

    if (lastIndex < line.length) {
      parts.push({
        type: "text",
        value: line.slice(lastIndex),
      });
    }

    return (
      <Text
        key={`${keyPrefix}-${lineIndex}`}
        fontSize="sm"
        whiteSpace="pre-wrap"
        lineHeight="1.6"
      >
        {parts.length > 0
          ? parts.map((part, partIndex) => {
              if (part.type === "link") {
                return (
                  <Link
                    key={`${keyPrefix}-${lineIndex}-${partIndex}`}
                    href={part.href}
                    isExternal={part.href.startsWith("http")}
                    color={color}
                    textDecoration="underline"
                    fontWeight="medium"
                    wordBreak="break-all"
                  >
                    {part.label}
                  </Link>
                );
              }

              return (
                <Fragment key={`${keyPrefix}-${lineIndex}-${partIndex}`}>
                  {part.value}
                </Fragment>
              );
            })
          : "\u00A0"}
      </Text>
    );
  });
}

function MessageBubble({ message }) {
  const isUser = message.role === "user";
  const textParts = (message.parts || []).filter(
    (part) => part.type === "text",
  );
  const hasRenderableText = textParts.some((part) => part.text.trim().length > 0);

  if (textParts.length === 0) {
    return null;
  }

  if (!isUser && !hasRenderableText) {
    return <LoadingBubble />;
  }

  if (isUser && !hasRenderableText) {
    return null;
  }

  return (
    <Flex justify={isUser ? "flex-end" : "flex-start"}>
      <Box
        maxW="85%"
        px={4}
        py={3}
        borderRadius="2xl"
        bg={isUser ? "#D92D26" : "white"}
        color={isUser ? "white" : "gray.800"}
        borderWidth={isUser ? "0" : "1px"}
        borderColor="gray.200"
        boxShadow="sm"
      >
        <Text fontSize="sm" fontWeight="semibold" mb={1}>
          {isUser ? "You" : "India Spice House"}
        </Text>
        {textParts.map((part, index) => (
          part.text.trim().length > 0 ? (
            <Box key={`${message.id}-${index}`}>
              {isUser
                ? renderRichText(
                    part.text,
                    `${message.id}-${index}`,
                    "whiteAlpha.900",
                  )
                : renderRichText(part.text, `${message.id}-${index}`, "#D92D26")}
            </Box>
          ) : null
        ))}
      </Box>
    </Flex>
  );
}

function LoadingBubble() {
  return (
    <Flex justify="flex-start">
      <Box
        maxW="85%"
        px={4}
        py={3}
        borderRadius="2xl"
        bg="white"
        borderWidth="1px"
        borderColor="gray.200"
        boxShadow="sm"
      >
        <Text fontSize="sm" fontWeight="semibold" mb={3} color="gray.800">
          India Spice House
        </Text>
        <SkeletonText
          noOfLines={3}
          spacing="3"
          skeletonHeight="3"
          startColor="gray.100"
          endColor="gray.200"
        />
      </Box>
    </Flex>
  );
}

function ChatbotPanel({ onClose }) {
  const [input, setInput] = useState("");
  const bottomRef = useRef(null);
  const { messages, sendMessage, status, error } = useChat({
    transport: chatTransport,
  });

  const isBusy = status === "submitted" || status === "streaming";

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, status]);

  const submitMessage = async (text) => {
    const value = text.trim();

    if (!value || isBusy) {
      return;
    }

    await sendMessage({ text: value });
    setInput("");
  };

  return (
    <Flex direction="column" h="100%">
      <Flex
        align="center"
        justify="space-between"
        px={5}
        py={4}
        bg="#D92D26"
        color="white"
      >
        <Box>
          <Badge bg="#238d1a" color="white" mb={2}>
            Website Assistant
          </Badge>
          <Heading size="sm">Ask a quick question</Heading>
          <Text fontSize="sm" opacity={0.95}>
            Hours, ordering, delivery, catering, and contact info.
          </Text>
        </Box>
        {onClose ? (
          <Button
            variant="ghost"
            color="white"
            _hover={{ bg: "rgba(255,255,255,0.12)" }}
            onClick={onClose}
          >
            Close
          </Button>
        ) : null}
      </Flex>

      <Stack spacing={4} px={5} py={4} flex="1" overflowY="auto" bg="gray.50">
        {messages.length === 0 ? (
          <Box
            bg="white"
            borderWidth="1px"
            borderColor="gray.200"
            borderRadius="2xl"
            p={4}
            boxShadow="sm"
          >
            <Text fontSize="sm" color="gray.700" mb={3}>
              Ask about restaurant hours, grocery hours, delivery, pickup,
              catering, or the best way to contact the team.
            </Text>
            <Stack spacing={2}>
              {starterPrompts.map((prompt) => (
                <Button
                  key={prompt}
                  justifyContent="flex-start"
                  variant="outline"
                  borderColor="gray.200"
                  bg="white"
                  _hover={{ borderColor: "#D92D26", color: "#D92D26" }}
                  onClick={() => submitMessage(prompt)}
                >
                  {prompt}
                </Button>
              ))}
            </Stack>
          </Box>
        ) : null}

        {messages.map((message) => (
          <MessageBubble key={message.id} message={message} />
        ))}

        {isBusy && messages[messages.length - 1]?.role !== "assistant" ? (
          <LoadingBubble />
        ) : null}

        {error ? (
          <Box
            bg="orange.50"
            borderRadius="xl"
            p={4}
            borderWidth="1px"
            borderColor="orange.200"
          >
            <Text fontSize="sm" color="orange.900">
              The assistant is unavailable right now. Please call{" "}
              <Link href="tel:9529428010" color="#D92D26">
                {businessInfo.restaurantPhone}
              </Link>{" "}
              or email{" "}
              <Link href={`mailto:${businessInfo.email}`} color="#D92D26">
                {businessInfo.email}
              </Link>
              .
            </Text>
          </Box>
        ) : null}

        <Box ref={bottomRef} />
      </Stack>

      <Divider />

      <Box bg="white" px={5} py={4}>
        <form
          onSubmit={async (event) => {
            event.preventDefault();
            await submitMessage(input);
          }}
        >
          <HStack align="stretch">
            <Input
              value={input}
              onChange={(event) => setInput(event.target.value)}
              placeholder="Ask a question..."
              borderColor="gray.300"
              focusBorderColor="#D92D26"
              disabled={isBusy}
            />
            <IconButton
              type="submit"
              aria-label="Send message"
              icon={<MdSend />}
              bg="#238d1a"
              color="white"
              _hover={{ bg: "#1c6f15" }}
              isDisabled={!input.trim() || isBusy}
            />
          </HStack>
        </form>

        <Text fontSize="xs" color="gray.500" mt={3}>
          If you need more assistance, call {businessInfo.restaurantPhone}.
        </Text>
      </Box>
    </Flex>
  );
}

export default function ChatbotWidget() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <>
      {!isMobile && isOpen ? (
        <Box
          position="fixed"
          right={{ base: 4, md: 6 }}
          bottom={{ base: 24, md: 28 }}
          w={{ base: "calc(100vw - 2rem)", md: "380px" }}
          h="560px"
          bg="white"
          borderRadius="2xl"
          overflow="hidden"
          boxShadow="0 24px 80px rgba(0, 0, 0, 0.22)"
          borderWidth="1px"
          borderColor="gray.200"
          zIndex="popover"
        >
          <ChatbotPanel onClose={onClose} />
        </Box>
      ) : null}

      <IconButton
        position="fixed"
        right={{ base: 4, md: 6 }}
        bottom={{ base: 4, md: 6 }}
        zIndex="popover"
        aria-label={isOpen ? "Close chatbot" : "Open chatbot"}
        icon={<ChatIcon />}
        isRound
        boxSize="64px"
        fontSize="26px"
        bg="#D92D26"
        color="white"
        boxShadow="0 16px 36px rgba(217, 45, 38, 0.35)"
        _hover={{ bg: "#b92620" }}
        _active={{ bg: "#a6221c" }}
        onClick={isOpen ? onClose : onOpen}
      />

      <Drawer
        isOpen={Boolean(isMobile && isOpen)}
        placement="bottom"
        onClose={onClose}
      >
        <DrawerContent maxH="78vh" borderTopRadius="2xl" overflow="hidden">
          <DrawerCloseButton zIndex="dropdown" color="white" />
          <DrawerBody p={0}>
            <ChatbotPanel />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
