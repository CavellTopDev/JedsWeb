import * as React from "react";
import { COLORS } from "../../../constants";
import { locations } from "../../../routing/locations";
import { styledViaProps } from "../../../util/styled";
import { ButtonLink } from "../../forms/ButtonLink";
import { SubtleButton } from "../../forms/SubtleButton";
import { SubtleButtonLink } from "../../forms/SubtleButtonLink";
import IconChevronDown from "../../icons/feather/IconChevronDown";
import IconMenu from "../../icons/feather/IconMenu";
import { Flex } from "../../layout/Flex";
import { Flow } from "../../layout/Flow";
import { Item } from "../../layout/Item";
import { Justify } from "../../layout/Justify";
import { Layer } from "../../layout/Layer";
import { Portal } from "../../layout/Portal";
import { FlipFlop } from "../../util/FlipFlop";
import { Hide } from "../../util/Hide";
import { Show } from "../../util/Show";
import { Sticky } from "../../util/Sticky";
import DovetailLogo from "./DovetailLogo";
import { MobileNav } from "./MobileNav";
import { UseCasesDropdown } from "./UseCasesDropdown";

interface Props {
  dark?: boolean;
  sticky?: boolean;
}

export class Header extends React.PureComponent<Props> {
  public render() {
    const { dark = false, sticky = true } = this.props;

    const header = (
      <Wrapper dark={dark}>
        <Justify>
          <Item>
            <Color dark={dark}>
              <SubtleButtonLink height={40} location={locations.home()}>
                <DovetailLogo color={dark ? COLORS.white : COLORS.purple} />
              </SubtleButtonLink>
            </Color>
          </Item>
          <Item>
            <Hide device="tablet">
              <Flex gap={16}>
                <Item>
                  <Flex gap={4}>
                    <Item>
                      <FlipFlop>
                        {({ active, toggle }) => (
                          <>
                            <Color dark={dark}>
                              <SubtleButton id="UseCasesDropdown" onClick={toggle}>
                                <Flow gap={4}>
                                  <Item>Use cases</Item>
                                  <Item>
                                    <IconChevronDown />
                                  </Item>
                                </Flow>
                              </SubtleButton>
                            </Color>
                            {active ? (
                              <Portal>
                                <Layer align="right" onDismissAttempt={toggle} parentId="UseCasesDropdown">
                                  <UseCasesDropdown />
                                </Layer>
                              </Portal>
                            ) : null}
                          </>
                        )}
                      </FlipFlop>
                    </Item>
                    <Item>
                      <Color dark={dark}>
                        <SubtleButtonLink location={locations.pricing()}>Pricing</SubtleButtonLink>
                      </Color>
                    </Item>
                    <Item>
                      <Color dark={dark}>
                        <SubtleButtonLink location={locations.help()}>Support</SubtleButtonLink>
                      </Color>
                    </Item>
                    <Item>
                      <Color dark={dark}>
                        <SubtleButtonLink location={locations.logIn()}>Log in</SubtleButtonLink>
                      </Color>
                    </Item>
                  </Flex>
                </Item>
                <Item>
                  <ButtonLink color={!dark ? COLORS.purple : COLORS.p80} height={32} location={locations.signUp()}>
                    Try now
                  </ButtonLink>
                </Item>
              </Flex>
            </Hide>
            <Show device="tablet">
              <FlipFlop>
                {({ active, toggle }) => (
                  <>
                    <Color dark={dark}>
                      <SubtleButton onClick={toggle}>
                        <IconMenu />
                      </SubtleButton>
                    </Color>
                    {active ? <MobileNav onDismiss={toggle} /> : null}
                  </>
                )}
              </FlipFlop>
            </Show>
          </Item>
        </Justify>
      </Wrapper>
    );

    if (sticky) {
      return <Sticky stickOnMobile>{header}</Sticky>;
    } else {
      return header;
    }
  }
}

const Wrapper = styledViaProps(
  "div",
  ({ dark }: { dark: boolean }) => JSON.stringify({ dark }),
  ({ dark }) => ({
    backgroundColor: dark ? COLORS.indigo : COLORS.white,
    color: COLORS.i60,
    padding: "12px 24px"
  })
);

const Color = styledViaProps(
  "div",
  ({ dark }: { dark: boolean }) => JSON.stringify({ dark }),
  ({ dark }) => ({
    color: dark ? COLORS.white : COLORS.i60,
    opacity: dark ? 0.9 : 1.0,

    $nest: {
      "&:hover": {
        opacity: 1.0
      }
    }
  })
);
