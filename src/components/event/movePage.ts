import { useRouter } from "next/router";

export const MovePage = () => {
  const router = useRouter();
  console.log(router);
  const isMain: boolean = router.pathname === "/";
  const onClickMovePage = () => {
    router.push(isMain ? "/todo/todoAdd" : "/");
  };
  return {
    onClickMovePage,
    isMain,
  };
};
