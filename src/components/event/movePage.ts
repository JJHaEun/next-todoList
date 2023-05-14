import { useRouter } from "next/router";

export const MovePage = () => {
  const router = useRouter();
  const isMain: boolean = router.pathname === "/";
  const onClickMovePage = () => {
    router.push(isMain ? "/todo/todoAdd" : "/");
  };
  return {
    onClickMovePage,
    isMain,
  };
};
