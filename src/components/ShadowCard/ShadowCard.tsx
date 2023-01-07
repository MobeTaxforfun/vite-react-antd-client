import { Card } from 'antd'
import './ShadowCard.less'

const ShadowCard = (props: any) => {
    return (
        <Card className="card-shadow">
            {props.children}
        </Card>
    )
}

export default ShadowCard