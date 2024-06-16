//@ts-nocheck
  // DO NOT MODIFY THIS FILE. This file is automatically generated by Tina
  export function gql(strings: TemplateStringsArray, ...args: string[]): string {
    let str = ''
    strings.forEach((string, i) => {
      str += string + (args[i] || '')
    })
    return str
  }
  export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** References another document, used as a foreign key */
  Reference: { input: any; output: any; }
  JSON: { input: any; output: any; }
};

export type SystemInfo = {
  __typename?: 'SystemInfo';
  filename: Scalars['String']['output'];
  title?: Maybe<Scalars['String']['output']>;
  basename: Scalars['String']['output'];
  breadcrumbs: Array<Scalars['String']['output']>;
  path: Scalars['String']['output'];
  relativePath: Scalars['String']['output'];
  extension: Scalars['String']['output'];
  template: Scalars['String']['output'];
  collection: Collection;
};


export type SystemInfoBreadcrumbsArgs = {
  excludeExtension?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Folder = {
  __typename?: 'Folder';
  name: Scalars['String']['output'];
  path: Scalars['String']['output'];
};

export type PageInfo = {
  __typename?: 'PageInfo';
  hasPreviousPage: Scalars['Boolean']['output'];
  hasNextPage: Scalars['Boolean']['output'];
  startCursor: Scalars['String']['output'];
  endCursor: Scalars['String']['output'];
};

export type Node = {
  id: Scalars['ID']['output'];
};

export type Document = {
  id: Scalars['ID']['output'];
  _sys?: Maybe<SystemInfo>;
  _values: Scalars['JSON']['output'];
};

/** A relay-compliant pagination connection */
export type Connection = {
  totalCount: Scalars['Float']['output'];
  pageInfo: PageInfo;
};

export type Query = {
  __typename?: 'Query';
  getOptimizedQuery?: Maybe<Scalars['String']['output']>;
  collection: Collection;
  collections: Array<Collection>;
  node: Node;
  document: DocumentNode;
  prices: Prices;
  pricesConnection: PricesConnection;
};


export type QueryGetOptimizedQueryArgs = {
  queryString: Scalars['String']['input'];
};


export type QueryCollectionArgs = {
  collection?: InputMaybe<Scalars['String']['input']>;
};


export type QueryNodeArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
};


export type QueryDocumentArgs = {
  collection?: InputMaybe<Scalars['String']['input']>;
  relativePath?: InputMaybe<Scalars['String']['input']>;
};


export type QueryPricesArgs = {
  relativePath?: InputMaybe<Scalars['String']['input']>;
};


export type QueryPricesConnectionArgs = {
  before?: InputMaybe<Scalars['String']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Float']['input']>;
  last?: InputMaybe<Scalars['Float']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<PricesFilter>;
};

export type DocumentFilter = {
  prices?: InputMaybe<PricesFilter>;
};

export type DocumentConnectionEdges = {
  __typename?: 'DocumentConnectionEdges';
  cursor: Scalars['String']['output'];
  node?: Maybe<DocumentNode>;
};

export type DocumentConnection = Connection & {
  __typename?: 'DocumentConnection';
  pageInfo: PageInfo;
  totalCount: Scalars['Float']['output'];
  edges?: Maybe<Array<Maybe<DocumentConnectionEdges>>>;
};

export type Collection = {
  __typename?: 'Collection';
  name: Scalars['String']['output'];
  slug: Scalars['String']['output'];
  label?: Maybe<Scalars['String']['output']>;
  path: Scalars['String']['output'];
  format?: Maybe<Scalars['String']['output']>;
  matches?: Maybe<Scalars['String']['output']>;
  templates?: Maybe<Array<Maybe<Scalars['JSON']['output']>>>;
  fields?: Maybe<Array<Maybe<Scalars['JSON']['output']>>>;
  documents: DocumentConnection;
};


export type CollectionDocumentsArgs = {
  before?: InputMaybe<Scalars['String']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Float']['input']>;
  last?: InputMaybe<Scalars['Float']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<DocumentFilter>;
  folder?: InputMaybe<Scalars['String']['input']>;
};

export type DocumentNode = Prices | Folder;

export type PricesPrice = {
  __typename?: 'PricesPrice';
  startDate?: Maybe<Scalars['String']['output']>;
  endDate?: Maybe<Scalars['String']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
};

export type Prices = Node & Document & {
  __typename?: 'Prices';
  price?: Maybe<Array<Maybe<PricesPrice>>>;
  id: Scalars['ID']['output'];
  _sys: SystemInfo;
  _values: Scalars['JSON']['output'];
};

export type DatetimeFilter = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  eq?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type NumberFilter = {
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  eq?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
};

export type PricesPriceFilter = {
  startDate?: InputMaybe<DatetimeFilter>;
  endDate?: InputMaybe<DatetimeFilter>;
  price?: InputMaybe<NumberFilter>;
};

export type PricesFilter = {
  price?: InputMaybe<PricesPriceFilter>;
};

export type PricesConnectionEdges = {
  __typename?: 'PricesConnectionEdges';
  cursor: Scalars['String']['output'];
  node?: Maybe<Prices>;
};

export type PricesConnection = Connection & {
  __typename?: 'PricesConnection';
  pageInfo: PageInfo;
  totalCount: Scalars['Float']['output'];
  edges?: Maybe<Array<Maybe<PricesConnectionEdges>>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addPendingDocument: DocumentNode;
  updateDocument: DocumentNode;
  deleteDocument: DocumentNode;
  createDocument: DocumentNode;
  createFolder: DocumentNode;
  updatePrices: Prices;
  createPrices: Prices;
};


export type MutationAddPendingDocumentArgs = {
  collection: Scalars['String']['input'];
  relativePath: Scalars['String']['input'];
  template?: InputMaybe<Scalars['String']['input']>;
};


export type MutationUpdateDocumentArgs = {
  collection?: InputMaybe<Scalars['String']['input']>;
  relativePath: Scalars['String']['input'];
  params: DocumentUpdateMutation;
};


export type MutationDeleteDocumentArgs = {
  collection?: InputMaybe<Scalars['String']['input']>;
  relativePath: Scalars['String']['input'];
};


export type MutationCreateDocumentArgs = {
  collection?: InputMaybe<Scalars['String']['input']>;
  relativePath: Scalars['String']['input'];
  params: DocumentMutation;
};


export type MutationCreateFolderArgs = {
  collection?: InputMaybe<Scalars['String']['input']>;
  relativePath: Scalars['String']['input'];
};


export type MutationUpdatePricesArgs = {
  relativePath: Scalars['String']['input'];
  params: PricesMutation;
};


export type MutationCreatePricesArgs = {
  relativePath: Scalars['String']['input'];
  params: PricesMutation;
};

export type DocumentUpdateMutation = {
  prices?: InputMaybe<PricesMutation>;
  relativePath?: InputMaybe<Scalars['String']['input']>;
};

export type DocumentMutation = {
  prices?: InputMaybe<PricesMutation>;
};

export type PricesPriceMutation = {
  startDate?: InputMaybe<Scalars['String']['input']>;
  endDate?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<Scalars['Float']['input']>;
};

export type PricesMutation = {
  price?: InputMaybe<Array<InputMaybe<PricesPriceMutation>>>;
};

export type PricesPartsFragment = { __typename: 'Prices', price?: Array<{ __typename: 'PricesPrice', startDate?: string | null, endDate?: string | null, price?: number | null } | null> | null };

export type PricesQueryVariables = Exact<{
  relativePath: Scalars['String']['input'];
}>;


export type PricesQuery = { __typename?: 'Query', prices: { __typename: 'Prices', id: string, _sys: { __typename?: 'SystemInfo', filename: string, basename: string, breadcrumbs: Array<string>, path: string, relativePath: string, extension: string }, price?: Array<{ __typename: 'PricesPrice', startDate?: string | null, endDate?: string | null, price?: number | null } | null> | null } };

export type PricesConnectionQueryVariables = Exact<{
  before?: InputMaybe<Scalars['String']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Float']['input']>;
  last?: InputMaybe<Scalars['Float']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<PricesFilter>;
}>;


export type PricesConnectionQuery = { __typename?: 'Query', pricesConnection: { __typename?: 'PricesConnection', totalCount: number, pageInfo: { __typename?: 'PageInfo', hasPreviousPage: boolean, hasNextPage: boolean, startCursor: string, endCursor: string }, edges?: Array<{ __typename?: 'PricesConnectionEdges', cursor: string, node?: { __typename: 'Prices', id: string, _sys: { __typename?: 'SystemInfo', filename: string, basename: string, breadcrumbs: Array<string>, path: string, relativePath: string, extension: string }, price?: Array<{ __typename: 'PricesPrice', startDate?: string | null, endDate?: string | null, price?: number | null } | null> | null } | null } | null> | null } };

export const PricesPartsFragmentDoc = gql`
    fragment PricesParts on Prices {
  __typename
  price {
    __typename
    startDate
    endDate
    price
  }
}
    `;
export const PricesDocument = gql`
    query prices($relativePath: String!) {
  prices(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...PricesParts
  }
}
    ${PricesPartsFragmentDoc}`;
export const PricesConnectionDocument = gql`
    query pricesConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: PricesFilter) {
  pricesConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...PricesParts
      }
    }
  }
}
    ${PricesPartsFragmentDoc}`;
export type Requester<C= {}> = <R, V>(doc: DocumentNode, vars?: V, options?: C) => Promise<R>
  export function getSdk<C>(requester: Requester<C>) {
    return {
      prices(variables: PricesQueryVariables, options?: C): Promise<{data: PricesQuery, errors?: { message: string, locations: { line: number, column: number }[], path: string[] }[], variables: PricesQueryVariables, query: string}> {
        return requester<{data: PricesQuery, errors?: { message: string, locations: { line: number, column: number }[], path: string[] }[], variables: PricesQueryVariables, query: string}, PricesQueryVariables>(PricesDocument, variables, options);
      },
    pricesConnection(variables?: PricesConnectionQueryVariables, options?: C): Promise<{data: PricesConnectionQuery, errors?: { message: string, locations: { line: number, column: number }[], path: string[] }[], variables: PricesConnectionQueryVariables, query: string}> {
        return requester<{data: PricesConnectionQuery, errors?: { message: string, locations: { line: number, column: number }[], path: string[] }[], variables: PricesConnectionQueryVariables, query: string}, PricesConnectionQueryVariables>(PricesConnectionDocument, variables, options);
      }
    };
  }
  export type Sdk = ReturnType<typeof getSdk>;

// TinaSDK generated code
import { createClient, TinaClient } from "tinacms/dist/client";

const generateRequester = (
  client: TinaClient,
) => {
  const requester: (
    doc: any,
    vars?: any,
    options?: {
      branch?: string,
      /**
       * Aside from `method` and `body`, all fetch options are passed
       * through to underlying fetch request
       */
      fetchOptions?: Omit<Parameters<typeof fetch>[1], 'body' | 'method'>,
    },
    client
  ) => Promise<any> = async (doc, vars, options) => {
    let url = client.apiUrl
    if (options?.branch) {
      const index = client.apiUrl.lastIndexOf('/')
      url = client.apiUrl.substring(0, index + 1) + options.branch
    }
    const data = await client.request({
      query: doc,
      variables: vars,
      url,
    }, options)

    return { data: data?.data, errors: data?.errors, query: doc, variables: vars || {} }
  }

  return requester
}

/**
 * @experimental this class can be used but may change in the future
 **/
export const ExperimentalGetTinaClient = () =>
  getSdk(
    generateRequester(
      createClient({
        url: "http://localhost:4001/graphql",
        queries,
      })
    )
  )

export const queries = (
  client: TinaClient,
) => {
  const requester = generateRequester(client)
  return getSdk(requester)
}

  