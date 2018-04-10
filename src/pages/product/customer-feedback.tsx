import * as React from "react";
import { Helmet } from "react-helmet";
import IllustrationAnnotationsFeedback from "../../components/illustrations/IllustrationAnnotationsFeedback";
import IllustrationBoard from "../../components/illustrations/IllustrationBoard";
import IllustrationForm from "../../components/illustrations/IllustrationForm";
import IllustrationProjectsFeedback from "../../components/illustrations/IllustrationProjectsFeedback";
import IllustrationSecurity from "../../components/illustrations/IllustrationSecurity";
import IllustrationSentimentChart from "../../components/illustrations/IllustrationSentimentChart";
import IllustrationSentimentText from "../../components/illustrations/IllustrationSentimentText";
import IllustrationSpace from "../../components/illustrations/IllustrationSpace";
import IllustrationTeam from "../../components/illustrations/IllustrationTeam";
import { Flex } from "../../components/layout/Flex";
import { Item } from "../../components/layout/Item";
import { DarkContainer } from "../../components/site/DarkContainer";
import { FeatureHero } from "../../components/site/FeatureHero";
import { FeatureHeroLarge } from "../../components/site/FeatureHeroLarge";
import { Features } from "../../components/site/Features";
import { Hero } from "../../components/site/Hero";
import { LightContainer } from "../../components/site/LightContainer";
import Wave from "../../components/site/Wave/Wave";
import { TYPICAL_PAGE_WIDTH, TYPICAL_VERTICAL_GAP } from "../../constants";
import { CenteredSignUp } from "../../sections/CenteredSignUp";
import { Integrations } from "../../sections/Integrations";
import { SocialProof } from "../../sections/SocialProof";

export default class extends React.PureComponent {
  public render() {
    return (
      <>
        <Helmet>
          <title>Dovetail – Keep all of your customer feedback in one place</title>
        </Helmet>
        <Flex gap={TYPICAL_VERTICAL_GAP} layout="column">
          <Item>
            <LightContainer maxWidth={TYPICAL_PAGE_WIDTH} verticalPadding={TYPICAL_VERTICAL_GAP / 2}>
              <Flex gap={TYPICAL_VERTICAL_GAP} layout="column">
                <Item>
                  <Hero image={<IllustrationSpace />} title="Keep all of your customer feedback in one place." />
                </Item>
                <Item>
                  <FeatureHeroLarge
                    center={false}
                    image={<Integrations />}
                    text="Import emails, survey results, support tickets, tweets, Facebook posts, and app reviews via Zapier."
                    title="Centralize feedback from thousands of apps."
                  />
                </Item>
                <Item>
                  <FeatureHero
                    image={<IllustrationForm />}
                    imagePosition="left"
                    text="Create a feedback form and get feedback directly from users. Theme it to match your brand without needing a developer."
                    title="Customize your own feedback form."
                  />
                </Item>
                <Item>
                  <Features
                    features={[
                      {
                        text: "Import customer feedback from thousands of apps",
                        title: "Zapier integration"
                      },
                      {
                        text: "Add simple feedback forms to your website or product",
                        title: "Embeddable form"
                      },
                      {
                        text: "Bulk import customer feedback from a spreadsheet",
                        title: "Spreadsheet upload"
                      }
                    ]}
                  />
                </Item>
              </Flex>
            </LightContainer>
          </Item>
          <Item>
            <Wave />
            <DarkContainer maxWidth={TYPICAL_PAGE_WIDTH} overflowBottom verticalPadding={TYPICAL_VERTICAL_GAP / 2}>
              <Flex gap={TYPICAL_VERTICAL_GAP} layout="column">
                <Item>
                  <FeatureHero
                    image={<IllustrationSentimentText />}
                    imagePosition="right"
                    location="/users/new"
                    text="Dovetail automatically analyzes the sentiment of incoming customer feedback and applies the relevant tags for you at the sentence level."
                    title="Automatically analyze feedback sentiment."
                  />
                </Item>
                <Item>
                  <FeatureHero
                    image={<IllustrationSentimentChart />}
                    imagePosition="left"
                    text="Keep track of changes in customer satisfaction and anticipate popular feature requests with powerful historical charts."
                    title="Measure changes in feedback over time."
                  />
                </Item>
                <Item>
                  <Features
                    features={[
                      {
                        text: "Automatically analyze the sentiment of feedback",
                        title: "Sentiment analysis"
                      },
                      {
                        text: "Track changes over time with a powerful line chart",
                        title: "Line chart"
                      },
                      {
                        text: "Understand your customer feedback at a glance",
                        title: "Bar chart"
                      }
                    ]}
                  />
                </Item>
                <Item>
                  <FeatureHeroLarge
                    image={<IllustrationAnnotationsFeedback />}
                    text="Tag sentences in feedback to categorize pain points, feature requests, research insights, and more."
                    title="Categorize feedback with annotations."
                  />
                </Item>
              </Flex>
            </DarkContainer>
          </Item>
          <Item>
            <LightContainer maxWidth={TYPICAL_PAGE_WIDTH} verticalPadding={TYPICAL_VERTICAL_GAP / 2}>
              <Flex gap={TYPICAL_VERTICAL_GAP} layout="column">
                <Item>
                  <Features
                    features={[
                      {
                        text: "Analyze feedback in our purpose-built editor",
                        title: "Editor"
                      },
                      {
                        text: "Quickly tag feedback using inline annotations",
                        title: "Annotations"
                      },
                      {
                        text: "Import images and files to organize and analyze",
                        title: "Images and files"
                      }
                    ]}
                  />
                </Item>
                <Item>
                  <FeatureHero
                    image={<IllustrationBoard />}
                    imagePosition="right"
                    text="Use a Trello-style Kanban board to organize your customer feedback. Drag &amp; drop to reorder or automatically sort lists in a single click."
                    title="Organize everything on an intuitive board."
                  />
                </Item>
                <Item>
                  <Features
                    features={[
                      {
                        text: "View feedback as a board with drag & drop like Trello",
                        title: "Boards"
                      },
                      {
                        text: "Categorize your feedback into color-coded, named groups",
                        title: "Groups"
                      },
                      {
                        text: "Quickly sort by title, modified, created date, or a custom rank",
                        title: "Sorting"
                      }
                    ]}
                  />
                </Item>
                <Item>
                  <FeatureHero
                    image={<IllustrationProjectsFeedback />}
                    imagePosition="left"
                    text="Split feedback into projects and share them with the rest of the organization. Archive old projects when they’re no longer relevant."
                    title="Create projects to organize feedback."
                  />
                </Item>
                <Item>
                  <FeatureHero
                    image={<IllustrationTeam />}
                    imagePosition="right"
                    text="Invite as many people as you like to browse feedback, collaborate on analysis, and consume insights with the original context."
                    title="Get customer feedback in front of your team."
                  />
                </Item>
                <Item>
                  <Features
                    features={[
                      {
                        text: "Split feedback as necessary and archive when finished",
                        title: "Projects"
                      },
                      {
                        text: "Invite as many people as you like for no extra cost",
                        title: "Unlimited users"
                      },
                      {
                        text: "Edit and organize feedback with others in real time",
                        title: "Real time collaboration"
                      }
                    ]}
                  />
                </Item>
              </Flex>
            </LightContainer>
          </Item>
          <Item>
            <Wave />
            <DarkContainer maxWidth={TYPICAL_PAGE_WIDTH} verticalPadding={TYPICAL_VERTICAL_GAP / 2}>
              <Flex gap={TYPICAL_VERTICAL_GAP} layout="column">
                <Item>
                  <FeatureHero
                    image={<IllustrationSecurity />}
                    imagePosition="right"
                    text="Dovetail is built on modern cloud infrastructure with security features designed to ensure the safety of your data."
                    title="We take your privacy and security seriously."
                  />
                </Item>
                <Item>
                  <Features
                    features={[
                      {
                        text:
                          "Upload a spreadsheet to quickly create notes, tags, or insights. Import images, audio recordings, and video with our bulk file uploader.",
                        title: "Data import"
                      },
                      {
                        text:
                          "You own your data. Download PDFs of your notes and insights, and easily export your tags to a spreadsheet for backup or further analysis elsewhere.",
                        title: "Data export"
                      },
                      {
                        text:
                          "Dovetail is GDPR compliant with a privacy-by-design architecture, the right to be forgotten, data portability features, and more.",
                        title: "GDPR"
                      },
                      {
                        text:
                          "We use Stripe for payments. Stripe has been audited by an independent PCI Qualified Security Assessor and is certified as a PCI Level 1 Service Provider.",
                        title: "PCI DSS"
                      }
                    ]}
                    large
                  />
                </Item>
              </Flex>
            </DarkContainer>
          </Item>
          <Item>
            <LightContainer maxWidth={TYPICAL_PAGE_WIDTH} verticalPadding={TYPICAL_VERTICAL_GAP / 2}>
              <Flex gap={TYPICAL_VERTICAL_GAP} layout="column">
                <Item>
                  <SocialProof />
                </Item>
                <Item>
                  <CenteredSignUp />
                </Item>
              </Flex>
            </LightContainer>
          </Item>
        </Flex>
      </>
    );
  }
}
