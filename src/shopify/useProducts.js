import { useQuery, gql } from "@apollo/client";

const PRODUCTS = gql`
  query {
    products(first: 10) {
      nodes {
        images(first: 10) {
          nodes {
            id
            altText
            url
          }
        }
        title
      }
    }
  }
`;

export const useProducts = () => {
  const result = useQuery(PRODUCTS);
  return result;
};
