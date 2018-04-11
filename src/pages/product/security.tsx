import * as React from "react";
import { Helmet } from "react-helmet";
import IllustrationSecurity from "../../components/illustrations/IllustrationSecurity";
import { Flex } from "../../components/layout/Flex";
import { Item } from "../../components/layout/Item";
import { DarkContainer } from "../../components/site/DarkContainer";
import { Hero } from "../../components/site/Hero";
import { TYPICAL_PAGE_WIDTH, TYPICAL_VERTICAL_GAP } from "../../constants";

export default class extends React.PureComponent {
  public render() {
    return (
      <>
        <Helmet>
          <title>Dovetail – Security</title>
        </Helmet>
        <Flex gap={TYPICAL_VERTICAL_GAP} layout="column">
          <Item>
            <DarkContainer maxWidth={TYPICAL_PAGE_WIDTH} verticalPadding={TYPICAL_VERTICAL_GAP / 2}>
              <Flex gap={TYPICAL_VERTICAL_GAP} layout="column">
                <Item>
                  <Hero image={<IllustrationSecurity />} showSignUp={false} title="Dovetail security and privacy.">
                    <Flex gap={24} layout="column">
                      <Item>
                        <p>
                          We understand you’ll be trusting us with research and customer feedback data, including potentially
                          sensitive information about your own customers or participants.
                        </p>
                      </Item>
                      <Item>
                        <p>
                          Our application is built on world-class, modern cloud infrastructure designed to ensure the safety of
                          your data. We have chosen proven third party cloud providers with a great security track record. We
                          also employ extra measures including regular backups, data encryption, sanitized logging, and common
                          attack prevention.
                        </p>
                      </Item>
                      <Item>
                        <p>
                          We’re not in the business of selling your data (anonymized or otherwise). You own your data and we
                          will never sell it to third parties. We also won’t look at your data unless you give us permission for
                          a support case.
                        </p>
                      </Item>
                    </Flex>
                  </Hero>
                </Item>
              </Flex>
            </DarkContainer>
          </Item>
        </Flex>
      </>
    );
  }
}
