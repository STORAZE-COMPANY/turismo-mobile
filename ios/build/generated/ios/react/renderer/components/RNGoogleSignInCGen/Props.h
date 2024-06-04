
/**
 * This code was generated by [react-native-codegen](https://www.npmjs.com/package/react-native-codegen).
 *
 * Do not edit this file as changes may cause incorrect behavior and will be lost
 * once the code is regenerated.
 *
 * @generated by codegen project: GeneratePropsH.js
 */
#pragma once

#include <react/renderer/components/view/ViewProps.h>
#include <react/renderer/core/PropsParserContext.h>

namespace facebook::react {

enum class RNGoogleSigninButtonColor { Dark, Light };

static inline void fromRawValue(const PropsParserContext& context, const RawValue &value, RNGoogleSigninButtonColor &result) {
  auto string = (std::string)value;
  if (string == "dark") { result = RNGoogleSigninButtonColor::Dark; return; }
  if (string == "light") { result = RNGoogleSigninButtonColor::Light; return; }
  abort();
}

static inline std::string toString(const RNGoogleSigninButtonColor &value) {
  switch (value) {
    case RNGoogleSigninButtonColor::Dark: return "dark";
    case RNGoogleSigninButtonColor::Light: return "light";
  }
}

class RNGoogleSigninButtonProps final : public ViewProps {
 public:
  RNGoogleSigninButtonProps() = default;
  RNGoogleSigninButtonProps(const PropsParserContext& context, const RNGoogleSigninButtonProps &sourceProps, const RawProps &rawProps);

#pragma mark - Props

  bool disabled{false};
  RNGoogleSigninButtonColor color{RNGoogleSigninButtonColor::Light};
  int size{0};
};

} // namespace facebook::react