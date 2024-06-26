"use client";
import { useState } from "react";
import { useTheme } from "styled-components";
import Button from "@/components/button";
import { AddIcon } from "@chakra-ui/icons";
import {
  FormControl,
  FormLabel,
  Switch,
  useMenuOptionGroup,
  VStack,
  Input,
  Textarea,
} from "@chakra-ui/react";

const Settings = () => {
  const dark = useTheme().mode === "dark";

  const [settingsInView, setSettingsInView] = useState("Notifications");
  const isNotifications = settingsInView === "Notifications";
  const isPassword = settingsInView === "Password";
  const isFeedback = settingsInView === "Feedback";
  const isTerms = settingsInView === "Terms";

  const alerts = [
    {
      head: "Market Alerts",
      options: ["Highflow prices", "Price Alerts", "Earning Results"],
    },

    {
      head: "News & Events",
      options: ["Portfoliio", "Morning Brief", "Company News", "Weekly News"],
    },
    {
      head: "Other Important Updates",
      options: ["Product Announcements", "Important Updates"],
    },
  ];

  const Notifications = () => {
    return (
      <section className="flex px-4 gap-6  flex-col">
        {/* Market News */}
        {alerts.map((item) => {
          return (
            <div className="flex pb-4 gap-8 ">
              <div>
                <h2
                  className={` ${
                    dark ? "" : "text-[#344054]"
                  }  lg:whitespace-nowrap text-[1.125rem] w-1/2 font-[800]`}
                >
                  {item.head}
                </h2>
                <p>
                  Select when you’ll be notified when the following changes
                  occur.
                </p>
              </div>

              <div className="w-2/5 flex gap-8 flex-col ">
                {item.options.map((option, i) => {
                  return (
                    <FormControl
                      borderBottom={
                        i === item.options.length - 1 ? "" : "1px solid #EAECF0"
                      }
                      paddingBottom={"16px"}
                      display="flex"
                      justifyContent={"space-between"}
                      alignItems="center"
                    >
                      <FormLabel htmlFor="email-alerts" mb="0">
                        {option}
                      </FormLabel>
                      <Switch size={"lg"} colorScheme={"orange"} id={option} />
                    </FormControl>
                  );
                })}
              </div>
            </div>
          );
        })}{" "}
        {/*  */}
      </section>
    );
  };

  const Password = () => {
    return (
      <section>
        <div>
          <div className="flex flex-col gap-10">
            <FormControl display={"flex"} justifyContent={"space-between"}>
              <FormLabel>Current Password</FormLabel>
              <Input
                border={"1px solid #FD891c"}
                width={["100%", "50%"]}
                className="w-1/2"
                type="password"
                padding={"10px 14px"}
                placeholder="Enter current password"
              />
            </FormControl>

            <FormControl display={"flex"} justifyContent={"space-between"}>
              <FormLabel>New Password</FormLabel>
              <Input
                width={["100%", "50%"]}
                border={"1px solid #FD891c"}
                type="password"
                padding={"10px 14px"}
                placeholder="Enter new password"
              />
            </FormControl>

            <FormControl display={"flex"} justifyContent={"space-between"}>
              <FormLabel>Confirm Password</FormLabel>
              <Input
                width={["100%", "50%"]}
                type="password"
                border={"1px solid #FD891c"}
                padding={"10px 14px"}
                placeholder="Confirm new password"
              />
            </FormControl>

            <Button customClassName="flex self-end" variant="custom-yellow">
              Save
            </Button>
          </div>
        </div>
      </section>
    );
  };
  const Terms = () => {
    return (
      <section>
        <article className="flex flex-col gap-4">
          <h2
            className={` ${
              dark ? "" : "text-[#344054]"
            }  lg:whitespace-nowrap text-[1.25rem] w-1/2 font-[800]`}
          >
            {" "}
            Terms and Privacy
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur. Parturient volutpat
            convallis purus elit ut maecenas. Et risus scelerisque ut etiam
            tellus fringilla volutpat faucibus. Mi ultricies sed egestas at
            sapien duis nunc egestas nunc. Tristique lectus arcu commodo ac
            scelerisque a hendrerit in. Vitae scelerisque hac feugiat in in
            cursus tristique. Ullamcorper nunc condimentum urna tellus at nunc.
            Lacinia ac tristique duis eget hac vitae dolor faucibus nisl.
          </p>
        </article>
      </section>
    );
  };
  const Feedback = () => {
    return (
      <section>
        <div className="flex flex-col gap-10">
          <p>
            Your feedback email address and username will be collected to
            improve our products and resolve any issue you report{" "}
          </p>

          <FormControl display={"flex"} justifyContent={"space-between"}>
            <FormLabel>Email Address</FormLabel>
            <Input
              border={"1px solid #FD891c"}
              width={["100%", "60%"]}
              className="w-1/2"
              type="email"
              padding={"10px 14px"}
              placeholder="Enter email"
            />
          </FormControl>
          <FormControl display={"flex"} justifyContent={"space-between"}>
            <FormLabel>Description</FormLabel>
            <Textarea width={["100%", "60%"]} border={"1px solid #FD891c"} />
          </FormControl>

          <Button customClassName="flex self-end" variant="custom-yellow">
            Save
          </Button>
        </div>
      </section>
    );
  };

  return (
    <div
      className={`flex mt-6 flex-col  relative gap-1 lg:gap-[60px] rounded-lg  w-full   ${
        dark ? "bg- " : "bg-white"
      } border-2 py-11 px-12 rounded-[12px] border-outline_orange`}
    >
      <div className={`flex mt-10 mb-4 gap-4  flex-col `}>
        <h1 className={`text-outline_orange ${dark ? "" : ""}`}>Settings</h1>

        <div
          className={`h-full flex ${
            dark ? "text-default_steps" : "bg-white text-[#344054]"
          } font-[800]`}
        >
          <button
            onClick={() => setSettingsInView("Notifications")}
            className={`   ${
              isNotifications && dark
                ? "bg-btn_orange text-white"
                : isNotifications && !dark
                ? "bg-[#F9FAFB]"
                : ""
            }  border-y-2 border-l-2 rounded-tl-lg rounded-bl-lg ${
              dark ? "border-outline_orange" : "border-[#D0D5DD]"
            }  py-[10px] px-4`}
          >
            Notifications
          </button>
          <button
            onClick={() => setSettingsInView("Feedback")}
            className={`border-y-2 border-x  ${
              dark ? "border-outline_orange" : "border-[#D0D5DD]"
            } ${
              isFeedback && dark
                ? "bg-btn_orange text-white "
                : isFeedback && !dark
                ? "bg-[#F9FAFB]"
                : ""
            } py-[10px] px-4`}
          >
            Feedback
          </button>
          <button
            onClick={() => setSettingsInView("Password")}
            className={`border-y-2 border-x  ${
              dark ? "border-outline_orange" : "border-[#D0D5DD]"
            } ${
              isPassword && dark
                ? "bg-btn_orange text-white "
                : isPassword && !dark
                ? "bg-[#F9FAFB]"
                : ""
            } py-[10px] px-4`}
          >
            Password
          </button>
          <button
            onClick={() => setSettingsInView("Terms")}
            className={`border-y-2 border-r-2 rounded-tr-lg rounded-br-lg  ${
              dark ? "border-outline_orange" : "border-[#D0D5DD]"
            } ${
              isTerms && dark
                ? "bg-btn_orange text-white"
                : isTerms && !dark
                ? "bg-[#F9FAFB]"
                : ""
            } py-[10px] px-4`}
          >
            Terms and conditions.
          </button>
        </div>
      </div>

      {isNotifications ? (
        <Notifications />
      ) : isPassword ? (
        <Password />
      ) : isFeedback ? (
        <Feedback />
      ) : isTerms ? (
        <Terms />
      ) : null}
    </div>
  );
};

export default Settings;
