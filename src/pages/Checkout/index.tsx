import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from "@phosphor-icons/react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";
import { TitleWithIcon } from "./components/titleWithIcon";
import {
  CheckoutContainer,
  FormContainer,
  PaymentMethods,
  ShippingInformation,
} from "./styles";
import { CartItems } from "./components/ProductCart";
import { useState } from "react";
import { PaymentButton } from "./components/PaymentButton";

const newFormValidationSchema = zod.object({
  addressLine1: zod.string().min(1, "Address is required"),
  addressLine2: zod.string().optional(),
  city: zod.string().min(1, "City is required"),
  state: zod.string().min(1, "State is required"),
  postalCode: zod.string().min(1, "Postal code is required"),
});

type newFormInterface = zod.infer<typeof newFormValidationSchema>;

export function Checkout() {
  const [paymentMethod, setPaymentMethod] = useState("");

  const { register, reset, formState, handleSubmit } = useForm({
    defaultValues: {
      addressLine1: "",
      addressLine2: "",
      city: "",
      state: "",
      postalCode: "",
    },
    resolver: zodResolver(newFormValidationSchema),
  });

  function handleSubmitForm(data: newFormInterface) {
    console.log(data);
    reset();
  }

  console.log(formState.errors);

  return (
    <form onSubmit={handleSubmit(handleSubmitForm)}>
      <CheckoutContainer>
        <div className="CheckoutInformations">
          <h2>Complete Your Order</h2>
          <ShippingInformation>
            <TitleWithIcon
              title="Shipping Address"
              subTitle="Enter the address where you would like to receive your order"
            >
              <MapPinLine />
            </TitleWithIcon>
            <FormContainer>
              <input
                type="text"
                placeholder="Address Line 1"
                {...register("addressLine1")}
              />
              <input
                type="text"
                placeholder="Address Line 2"
                {...register("addressLine2")}
              />
              <div>
                <input
                  type="text"
                  placeholder="Postal Code"
                  {...register("postalCode")}
                />
                <input type="text" placeholder="City" {...register("city")} />
                <input type="text" placeholder="State" {...register("state")} />
              </div>
            </FormContainer>
          </ShippingInformation>
          <ShippingInformation>
            <TitleWithIcon
              title="Payment"
              subTitle="Payment is done on delivery. Choose the method you want to pay"
            >
              <CurrencyDollar />
            </TitleWithIcon>
            <PaymentMethods>
              <PaymentButton
                value="credit-card"
                paymentMethod={paymentMethod}
                setPaymentMethod={setPaymentMethod}
              >
                <CreditCard />
                Credit Card
              </PaymentButton>
              <PaymentButton
                value="debit-card"
                paymentMethod={paymentMethod}
                setPaymentMethod={setPaymentMethod}
              >
                <Bank />
                Debit Card
              </PaymentButton>
              <PaymentButton
                value="cash"
                paymentMethod={paymentMethod}
                setPaymentMethod={setPaymentMethod}
              >
                <Money />
                Cash
              </PaymentButton>
            </PaymentMethods>
          </ShippingInformation>
        </div>

        <div className="CartResumeContainer">
          <h2>Products Selected</h2>
          <div className="cartResume">
            <CartItems />

            <button type="submit">Confirm Order</button>
          </div>
        </div>
      </CheckoutContainer>
    </form>
  );
}
