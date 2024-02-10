import { Clock, MapPin, Money } from "@phosphor-icons/react";
import { SuccessContainer } from "./styles";

export function Success() {
  return (
    <SuccessContainer>
      <h1>Woohoo!! Order Confirmed</h1>
      <p>Now just wait and it will come to you soon</p>
      <div>
        <div className="informationsBorder">
          <div className="informations">
            <div>
              <MapPin weight="fill" />
              <p>
                Delivery in <b>Alameda Vicente Pinzon, 54</b> <br />
                Vila Olimpia, São Paulo - SP
              </p>
            </div>
            <div>
              <Clock />
              <p>
                Eestimated arrival time
                <br />
                <b>20 min - 30 min</b>
              </p>
            </div>
            <div>
              <Money />
              <p>
                Payment on delivery <br />
                <b>Credit Card</b>
              </p>
            </div>
          </div>
        </div>
        <div className="image">
          <img src="/success.svg" alt="Success" />
        </div>
      </div>
    </SuccessContainer>
  );
}
