import { CurrencyDollar, MapPinLine } from "@phosphor-icons/react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";
import { TitleWithIcon } from "./components/titleWithIcon";

const newFormValidationSchema = zod.object({
  addressLine1: zod.string().min(1, "Address is required"),
  addressLine2: zod.string().optional(),
  city: zod.string().min(1, "City is required"),
  state: zod.string().min(1, "State is required"),
  postalCode: zod.string().min(1, "Postal code is required"),
});

type newFormInterface = zod.infer<typeof newFormValidationSchema>;

export function Checkout() {
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
      <div className="CheckoutContainer">
        <div className="CheckoutInformations">
          <h2>Complete Your Order</h2>
          <div className="shippingInformation">
            <TitleWithIcon
              title="Shipping Address"
              subTitle="Enter the address where you would like to receive your order"
            >
              <MapPinLine />
            </TitleWithIcon>
            <div className="form">
              <input type="text" {...register("addressLine1")} />
              <input type="text" {...register("addressLine2")} />
              <input type="text" {...register("city")} />
              <input type="text" {...register("state")} />
              <input type="text" {...register("postalCode")} />
            </div>
          </div>
          <div className="paymentInformation">
            <TitleWithIcon
              title="Payment"
              subTitle="Payment is done on delivery. Choose the method you want to pay"
            >
              <CurrencyDollar />
            </TitleWithIcon>
          </div>
        </div>

        <div className="CartResume">
          <h2>Products Selected</h2>
          <div className="cart">
            <button type="submit">Confirm Order</button>
          </div>
        </div>
      </div>
    </form>
  );
}
