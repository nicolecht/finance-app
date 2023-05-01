import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Button, Container, Row, Col, Stack } from "react-bootstrap";
import BudgetCard from "./components/BudgetCard";
import AddBudgetModal from "./components/AddBudgetModal";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <Container className="my-4">
      <Stack direction="horizontal" gap={2} className="mb-4">
        <h1 className="me-auto">Budgets</h1>
        <Button variant="primary">Add Budget</Button>
        <Button variant="outline-primary">Add Expense</Button>
      </Stack>
      <div
        style={{
          display: "grid",
          // gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap: "1rem",
          alignItems: "flex-start",
        }}
      >
        <BudgetCard name="Entertainment" amount={200} max={2000}></BudgetCard>
      </div>
    </Container>
    <AddBudgetModal show />
    </>
  );
}

export default App;
