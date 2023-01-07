import { Card } from "antd"
import './ShadowSearchCard.less'

const ShadowSearchCard = (props: any) => {
    return (
        <Card className="search-card-shadow">
            {props.children}
        </Card>
    )
}

export default ShadowSearchCard