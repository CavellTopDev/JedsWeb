import { storiesOf } from "@heydovetail/website/util/stories";
import React from "react";
import { HeroText } from "../";

storiesOf("Site/HeroText", module).add("default", () => (
  <HeroText title="Customer feedback &amp; research software for teams." />
));
