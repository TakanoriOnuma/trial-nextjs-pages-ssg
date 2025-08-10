import { useRouter } from "next/router";
import type { FC } from "react";

const DynamicPage: FC = () => {
  const { query } = useRouter();

  return (
    <div>
      <div>動的ページ</div>
      <div>ID: {query.id}</div>
    </div>
  );
};

export default DynamicPage;
