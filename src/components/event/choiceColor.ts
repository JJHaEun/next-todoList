export const onChangeChoiceColor = (setSelectColor: any) => {
  const choiceColor = (color: string) => () => {
    setSelectColor(color);
    console.log(color);
  };
  return {
    choiceColor,
  };
};
