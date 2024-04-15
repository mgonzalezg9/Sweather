import React from "react";
import { Text } from "react-native";
import renderer from "react-test-renderer";
import SquareButton from "../SquareButton";

describe(`SquareButton`, () => {
  it(`renders correctly`, () => {
    const helloWorld = "Hello World";
    const tree = renderer.create(<SquareButton icon={<Text>{helloWorld}</Text>} onClick={null} />);

    expect(tree).toMatchSnapshot();
  });
});
