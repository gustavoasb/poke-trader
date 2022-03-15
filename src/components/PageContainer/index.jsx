import { PageStyle } from "./style";

function PageContainer({children}){
  return(
    <PageStyle>
      {children}
    </PageStyle>
  )
}

export default PageContainer;