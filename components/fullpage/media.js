import React from "react";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/themes/theme-c137.css";
import { withNavigationContext } from "react-awesome-slider/dist/navigation";
import Lettering from "../lettering/lettering";
import Background from "../background/background";
import Content from "../content/content";
import Mouse from "../mouse/mouse";
import Section from "../section/section";
import Page from "../page/page";
import "./fullpage.css";

export const Home = withNavigationContext(({ fullpage }) => {
  return (
    <Section wrapper={false} backgroundColor="#292c35">
      <Content
        main={
          <Lettering
            title="INDEX"
            text={[
              "This is a single full page fixed screen.",
              "Use the button bellow to navigate to the next page"
            ]}
          />
        }
        action={
          <div className="button">
            <AwesomeButton
              size="large"
              onPress={() => {
                fullpage.navigate("/page-two");
              }}
            >
              Goto the next page
            </AwesomeButton>
          </div>
        }
      />
    </Section>
  );
});

export const Shio = withNavigationContext(({ fullpage }) => {
  return (
    <Section wrapper={false} backgroundColor="#7b2525">
      <Background src="/static/chara/shio-float.png" />
      <Content
        main={
        <div>
          <Lettering
            title="Arshio Mandala"
            text={["The twin brother who sacrifices his half body for saving his twin sister's life."]}
          />
          <Lettering
          text={["Hobbies : Gaming, Sharing cursed things, Sleeping"]}
          />
          <Lettering
            text={["Skill : Voice Acting"]}
          />
          <Lettering
            text={["Aspiration : Become Rich"]}
          />
        </div>
        }
        action={
          <img className="shio-logo" src="/static/chara/shio-logo.png"/>
        }
      />
    </Section>
  );
});

export const Umi = withNavigationContext(({ fullpage }) => {
  return (
    <Section wrapper={false} backgroundColor="#dda949">
      <Background src="/static/chara/umi-float.png" />
      <Content
        main={
          <div>
          <Lettering
            title="Seruni Santika"
            text={["The twin sister who loves to sing. She was on the verge of death so living in his brother's body is inevitable."]}
            p="umi"
          />
          <Lettering
            p="umi"
            text={["Hobbies : Singing, Eating, Ships other people"]}
          />
          <Lettering
            p="umi"
            text={["Skill : Singing"]}
          />
          <Lettering
            p="umi"
            text={["Aspiration : Famous Virtual Singer"]}
          />
          </div>
        }
        action={
          <img className="umi-logo" src="/static/chara/umi-logo.png"/>
        }
      />
    </Section>
  );
});

export const Shimi = withNavigationContext(({ fullpage }) => {
  return (
    <Section wrapper={false} backgroundColor="#0b3f6e">
      <Background src="/static/chara/shimi.png" />
      <Content
        main={
          <div>
          <Lettering
            p="shimi"
            title="Shimi"
            text={["The original 4th wall breaker. Will occassionally show up. You will see Shimi when you see her."]}
          />
          </div>
        }
        action={
          <img className="shimi-logo" src="/static/chara/shimi-logo.png"/>
        }
      />
    </Section>
  );
});

export const media = [
  {
    slug: "",
    className: "slide page-one",
    children: <Home />
  },
  {
    slug: "umi",
    className: "slide umi",
    children: <Umi />
  },
  {
    slug: "shio",
    className: "slide shio",
    children: <Shio />
  },
  {
    slug: "shimi",
    className: "slide shimi",
    children: <Shimi />
  }
];
