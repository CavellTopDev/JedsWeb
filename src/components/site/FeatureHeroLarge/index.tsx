import { BREAKPOINT_PHABLET } from "@heydovetail/ui-components";
import { Flex } from "@heydovetail/ui-components";
import { Item } from "@heydovetail/ui-components";
import { Center } from "@heydovetail/website/components/layout/Center";
import { LIGHT_TEXT_OPACITY } from "@heydovetail/website/constants";
import React from "react";
import { styled } from "typestyle-react";
import { extend, media } from "typestyle/lib";

interface Props {
  center?: boolean;
  image: React.ReactNode;
  text: string;
  title: string;
}

export class FeatureHeroLarge extends React.PureComponent<Props> {
  public render() {
    const { center = true, image, text, title } = this.props;

    const content = (
      <Wrapper styled={{ center }}>
        <Flex styled={{ gap: 24, layout: "column" }}>
          <Item>
            <h2>{title}</h2>
          </Item>
          <Item>
            <p style={{ opacity: LIGHT_TEXT_OPACITY }}>{text}</p>
          </Item>
          <Item>{image}</Item>
        </Flex>
      </Wrapper>
    );

    if (center) {
      return <Center>{content}</Center>;
    } else {
      return content;
    }
  }
}

const Wrapper = styled("div", ({ center }: { center: boolean }) =>
  extend(
    {
      textAlign: center ? "center" : "left"
    },
    media(
      { maxWidth: BREAKPOINT_PHABLET },
      {
        textAlign: "left"
      }
    )
  )
);
