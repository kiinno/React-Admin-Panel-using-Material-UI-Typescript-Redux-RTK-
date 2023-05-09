import React, { useState } from "react";
import { Box, Stack, Typography, useTheme } from "@mui/material";
import Header from "../../components/Header";
import AskAccordion from "../../components/AskAccordion";
import { tokens } from "../../theme";
import { useSelector } from "react-redux";

const FAQ = () => {
  const [expanded, setExpanded] = useState<string | number | null>(null);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const system = useSelector((state: any) => state.System);
  const questionsList = [
    {
      title: "Array programming questions",
      questions: [
        {
          question:
            "How do you find the largest and smallest number in an array of 1-100?",
          answer: "",
          hint: "",
          showId: false,
        },
        {
          question:
            "How would you define the term 'array' to someone with no industry knowledge?",
          answer: "",
          hint: "",
          showId: false,
        },
        {
          question: "How do you find a missing number in an array of 1-100?",
          answer: "",
          hint: "",
          showId: false,
        },
        {
          question: "How do you reverse an array in place in Java?",
          answer: "",
          hint: "",
          showId: false,
        },
        {
          question: "What is an integer array?",
          answer: "",
          hint: "",
          showId: false,
        },
        {
          question: "Can you find duplicate numbers in an array?",
          answer: "",
          hint: "",
          showId: false,
        },
        {
          question: "Can you remove duplicates from an array?",
          answer: "",
          hint: "",
          showId: false,
        },
        {
          question: "How do you convert a byte array into a string?",
          answer: "",
          hint: "",
          showId: false,
        },
      ],
    },
    {
      title: "LinkedList programming questions",
      questions: [
        {
          question: "When should you use LinkedList programming?",
          answer: "",
          hint: "",
          showId: false,
        },
        {
          question: "How do you reverse a linked list?",
          answer: "",
          hint: "",
          showId: false,
        },
        {
          question: "How can you figure out if a linked list contains a cycle?",
          answer: "",
          hint: "",
          showId: false,
        },
        {
          question: "How do you find a cycle's starting node?",
          answer: "",
          hint: "",
          showId: false,
        },
        {
          question:
            "How do you remove an Nth Node from the end of a linked list?",
          answer: "",
          hint: "",
          showId: false,
        },
        {
          question: "How do you find the start of a loop?",
          answer: "",
          hint: "",
          showId: false,
        },
        {
          question:
            "What is the difference between a linked list and an array data structure?",
          answer: "",
          hint: "",
          showId: false,
        },
        {
          question: "How would you merge two sorted linked lists?",
          answer: "",
          hint: "",
          showId: false,
        },
      ],
    },
    {
      title: "Binary Tree programming questions",
      questions: [
        {
          question: "When should you use binary tree programming?",
          answer: "",
          hint: "",
          showId: false,
        },
        {
          question: "Do you know how to find the depth of a binary tree?",
          answer: "",
          hint: "",
          showId: false,
        },
        {
          question:
            "What are leaf nodes and why are they important in a binary tree?",
          answer: "",
          hint: "",
          showId: false,
        },
        {
          question:
            "What is a postorder traversal algorithm and how do you use it?",
          answer: "",
          hint: "",
          showId: false,
        },
        {
          question:
            "What is the difference between preorder, inorder and postorder traversals?",
          answer: "",
          hint: "",
          showId: false,
        },
        {
          question:
            "What is the depth-first search algorithm for a binary tree?",
          answer: "",
          hint: "",
          showId: false,
        },
        {
          question:
            "Can you traverse a binary tree in postorder traversal without recursion?",
          answer: "",
          hint: "",
          showId: false,
        },
        {
          question: "How are leaves printed?",
          answer: "",
          hint: "",
          showId: false,
        },
      ],
    },
  ];
  return (
    <Box>
      <Header title="FAQ" subtitle="All the questions looped in your mind." />
      <Stack spacing={3}>
        {questionsList.map((questions) => (
          <Box
            sx={{
              backgroundColor: colors.primary[400],
              p: 2,
              borderRadius: "4px",
            }}
          >
            <Typography
              mb={1}
              variant="h5"
              bgcolor={colors[system.themeColor as "blueAccent"][700]}
              p={1}
              borderRadius={"4px"}
            >
              {questions.title}
            </Typography>
            {questions.questions.map((ques) => (
              <AskAccordion
                expanded={expanded}
                setExpanded={setExpanded}
                question={ques.question}
                answer={ques.answer}
              />
            ))}
          </Box>
        ))}
      </Stack>
    </Box>
  );
};

export default FAQ;
