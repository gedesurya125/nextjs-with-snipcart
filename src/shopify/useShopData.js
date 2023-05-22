import { useQuery, gql } from "@apollo/client";

const SHOP = gql`
  query {
    shop {
      name
    }
  }
`;

export const useShop = () => {
  const result = useQuery(SHOP);
  return result;
};
