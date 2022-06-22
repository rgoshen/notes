# TransactionCreateStepTwo.test.js

```nodejs
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TransactionCreateStepTwo from "./TransactionCreateStepTwo";
test("on initial render, pay button is disabled", async () => {
  render(<TransactionCreateStepTwo sender={{ id: "5" }} receiver={{ id: "5" }} />);

  //   screen.debug();
  //   screen.getByRole("");
  expect(await screen.findByRole("button", { name: /pay/i })).toBeDisabled();
});

test("amount and note entered, pay button becomes enabled", async () => {
  render(<TransactionCreateStepTwo sender={{ id: "5" }} receiver={{ id: "5" }} />);

  userEvent.type(screen.getByPlaceholderText(/Amount/i), "50");
  userEvent.type(screen.getByPlaceholderText(/Add a note/i), "dinner");

  expect(await screen.findByRole("button", { name: /pay/i })).toBeEnabled();
});
```
