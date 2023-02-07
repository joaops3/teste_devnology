import { GetServerSideProps, GetServerSidePropsContext, GetServerSidePropsResult } from "next";

export const protectSSR = <T extends { [key: string]: any; }>(cb: GetServerSideProps<T>) => {
  return async (ctx: GetServerSidePropsContext): Promise<GetServerSidePropsResult<T>> => {
    const auth = false

    if(!auth){
      return {
        redirect: {
          destination: "/",
          permanent: false
        }
      }
    }

    return await cb(ctx)

  }
}