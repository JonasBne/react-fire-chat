/* eslint-disable */
import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type AddMessagePayload = {
  __typename?: 'AddMessagePayload';
  name: Scalars['String'];
};

export type Message = {
  __typename?: 'Message';
  content: Scalars['String'];
  createdAt: Scalars['String'];
  id: Scalars['ID'];
  sender: Scalars['String'];
};

export type MessageInput = {
  content: Scalars['String'];
  sender: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addMessage: AddMessagePayload;
};

export type MutationAddMessageArgs = {
  input: MessageInput;
};

export type Query = {
  __typename?: 'Query';
  messages?: Maybe<Array<Message>>;
};

export type GetMessagesQueryVariables = Exact<{ [key: string]: never }>;

export type GetMessagesQuery = {
  __typename?: 'Query';
  messages?: Array<{ __typename?: 'Message'; content: string; id: string; sender: string; createdAt: string }> | null;
};

export type AddMessageMutationVariables = Exact<{
  input: MessageInput;
}>;

export type AddMessageMutation = {
  __typename?: 'Mutation';
  addMessage: { __typename?: 'AddMessagePayload'; name: string };
};

export const GetMessagesDocument = gql`
  query getMessages {
    messages {
      content
      id
      sender
      createdAt
    }
  }
`;
export type GetMessagesQueryResult = Apollo.QueryResult<GetMessagesQuery, GetMessagesQueryVariables>;
export const AddMessageDocument = gql`
  mutation addMessage($input: MessageInput!) {
    addMessage(input: $input) {
      name
    }
  }
`;
export type AddMessageMutationFn = Apollo.MutationFunction<AddMessageMutation, AddMessageMutationVariables>;
export type AddMessageMutationResult = Apollo.MutationResult<AddMessageMutation>;
export type AddMessageMutationOptions = Apollo.BaseMutationOptions<AddMessageMutation, AddMessageMutationVariables>;
