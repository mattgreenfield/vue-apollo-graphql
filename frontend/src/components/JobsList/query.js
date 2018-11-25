import gql from "graphql-tag";

export const JOB_QUERY = gql`
  query AllJobsQuery {
    jobs {
      id
      title
      description
    }
  }
`;
