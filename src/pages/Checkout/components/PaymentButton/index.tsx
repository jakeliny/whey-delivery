import { PaymentButtonContainer } from "./styles";

interface paymentButtonProps {
  value: string;
  paymentMethod: string;
  setPaymentMethod: (value: string) => void;
  children: React.ReactNode;
}

export function PaymentButton({
  value,
  paymentMethod,
  setPaymentMethod,
  children,
}: paymentButtonProps) {
  return (
    <PaymentButtonContainer
      value={value}
      type="button"
      className={paymentMethod === value ? "selected" : ""}
      onClick={(e) => setPaymentMethod(e.currentTarget.value)}
    >
      {children}
    </PaymentButtonContainer>
  );
}
