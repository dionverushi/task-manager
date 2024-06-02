import { BackgroundImage, ImageComponent } from '@layouts/backgroundImage';
import { GradientDirection } from '@layouts/backgroundImage/types';
import { Container } from '@layouts/container';
import { Text } from '@layouts/typography/Text';
import { Tab, Tabs } from '@nextui-org/react';
import { BorderRadius } from '@themes/borderRadius';
import { Color } from '@themes/color';
import { FontSize } from '@themes/fontSize';
import { ImageSize } from '@themes/images';
import { Shadow } from '@themes/shadow';
import { HorizontalSpacing, VerticalSpacing } from '@themes/spacing';

import { useLogin } from './useLogin';

const TAB_MAX_HEIGHT = 35;
export const Login = () => {
  const { tabs, onTabChange } = useLogin();

  return (
    <BackgroundImage
      name="nature"
      imageHeight={ImageSize?.full}
      gradient={{
        direction: GradientDirection.BOTTOM,
        from: Color.VIVID_BLUE,
        to: Color.WHITE,
      }}
    >
      <Container className="flex gap-3 absolute top-10 left-14 md:top-8 sm:top-6 xs:top-4 xs:left-8">
        <ImageComponent
          name="amd"
          white
          imageHeight={ImageSize.XL1}
          imageWidth={ImageSize.XL1}
        />
        {/* <Container>
          <Text
            className="font-cabin font-bold tracking-wide leading-none"
            fontSize={FontSize.HEADLINE_3}
            color={Color.WHITE}
          >
            NEXT LEVEL
          </Text>
          <Text
            className="font-cabin font-bold tracking-wide leading-none"
            fontSize={FontSize.HEADLINE_3}
            color={Color.WHITE}
          >
            GYM
          </Text>
        </Container>  */}
      </Container>
      <Container
        className="h-dvh flex items-center justify-center"
        padding={HorizontalSpacing.M_L}
      >
        <Container
          className="h-5/6 w-2/6 shadow-shadow5 overflow-scroll no-scrollbar md:w-4/6 md:h-4/6 sm:w-3/5 xs:w-full xs:h-5/6"
          backgroundColor={Color.WHITE}
          padding={HorizontalSpacing.S_M}
          borderRadius={BorderRadius.S_M}
          boxShadow={Shadow.SHADOW4}
        >
          <Container className="w-full h-full flex flex-col items-center justify-start">
            <Container className="flex flex-col items-center gap-1">
              <Text
                className="font-cabin font-bold"
                fontSize={FontSize.CAPTION_1}
              >
                Welcome Back!
              </Text>
              <Text
                className="font-cabin"
                fontSize={FontSize.OVERLINE}
                color={Color.GREY_4}
              >
                Welcome back! Please enter your details!
              </Text>
            </Container>
            <Container
              className="flex w-full flex-col items-center"
              flexGrow={1}
            >
              <Tabs
                aria-label="Dynamic tabs"
                items={tabs}
                onSelectionChange={onTabChange}
                fullWidth
              >
                {(item) => (
                  <Tab
                    key={item.id}
                    title={item.label}
                    className="w-full flex-grow"
                    style={{
                      height: VerticalSpacing.M_L,
                      fontSize: FontSize.OVERLINE,
                      maxHeight: TAB_MAX_HEIGHT,
                    }}
                  >
                    {item.content}
                  </Tab>
                )}
              </Tabs>
            </Container>
          </Container>
        </Container>
      </Container>
    </BackgroundImage>
  );
};
