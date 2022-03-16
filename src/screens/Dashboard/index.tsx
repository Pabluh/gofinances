import React from "react";
import { HighlightCard } from "../../components/HighlightCard";
import {
  TransactionCard,
  TransactionCardProps,
} from "../../components/TransactionCard";
import {
  Container,
  Header,
  UserWrapper,
  UserInfo,
  Photo,
  User,
  UserGreeting,
  UserName,
  Icon,
  HighlightCards,
  Transactions,
  Title,
  TransactionsList,
} from "./styles";

export interface DataListProps extends TransactionCardProps {
  id: string;
}

export function Dashboard() {
  const data: DataListProps[] = [
    {
      id: "1",
      type: "positive",
      title: "Desenvolvimento de site",
      amount: "R$ 12.000,00",
      category: {
        name: "Venda",
        icon: "dollar-sign",
      },
      date: "12/02/2022",
    },
    {
      id: "2",
      type: "negative",
      title: "Alimentação",
      amount: "R$ 200,00",
      category: {
        name: "Alimentação",
        icon: "coffee",
      },
      date: "12/02/2022",
    },
    {
      id: "3",
      type: "negative",
      title: "Aluguel",
      amount: "R$ 12.000,00",
      category: {
        name: "Aluguel",
        icon: "shopping-bag",
      },
      date: "12/02/2022",
    },
  ];

  return (
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>
            <Photo
              source={{
                uri: "https://avatars.githubusercontent.com/u/260357?v=4",
              }}
            />
            <User>
              <UserGreeting>Olá, </UserGreeting>
              <UserName>Usuário</UserName>
            </User>
          </UserInfo>
          <Icon name="power" />
        </UserWrapper>
      </Header>
      <HighlightCards>
        <HighlightCard
          type="up"
          title="Entradas"
          amount="R$ 17.400,00"
          lastTransaction="Última entrada dia 13 de abril de 2020"
        />
        <HighlightCard
          type="down"
          title="Saídas"
          amount="R$ 1.400,00"
          lastTransaction="Última entrada dia 13 de abril de 2020"
        />
        <HighlightCard
          type="total"
          title="Total"
          amount="R$ 16.000,00"
          lastTransaction="Última entrada dia 13 de abril de 2020"
        />
      </HighlightCards>
      <Transactions>
        <Title>Listagem</Title>

        <TransactionsList
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <TransactionCard data={item} />}
        />
      </Transactions>
    </Container>
  );
}
