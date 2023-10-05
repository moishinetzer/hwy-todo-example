import { DataFunctionArgs } from "hwy";

export function action({}: DataFunctionArgs) {
  return {
    error: true,
    message: "Error: This is a fake todos page. It does not do anything.",
  };
}

export default function Todos() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
      <p hx-boost="false">
        This is the todos page. See the todos below. This is coming from{" "}
        <code>src/pages/todos.page.tsx</code>
      </p>
    </div>
  );
}
