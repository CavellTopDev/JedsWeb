import { storiesOf } from "@dovetailapp/website/util/stories";
import * as React from "react";
import { OptionalErrorOverlay } from "../";

storiesOf("Form/OptionalErrorOverlay", module).add("text input", () => (
  <OptionalErrorOverlay error="Error message">
    <input type="text" />
  </OptionalErrorOverlay>
));
