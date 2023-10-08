import React from "react"
import ContentLoader from "react-content-loader"

const PizzaSkeleton = (props) => (
    <ContentLoader
        speed={2}
        width={280}
        height={465}
        viewBox="0 0 280 465"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        className="pizza-block"
        {...props}
    >
        <rect x="62" y="183" rx="3" ry="3" width="88" height="6" />
        <rect x="0" y="299" rx="3" ry="3" width="280" height="80" />
        <rect x="0" y="251" rx="4" ry="4" width="280" height="29" />
        <rect x="231" y="472" rx="3" ry="3" width="380" height="6" />
        <circle cx="140" cy="120" r="120" />
        <rect x="0" y="400" rx="4" ry="4" width="100" height="30" />
        <rect x="123" y="399" rx="20" ry="20" width="152" height="47" />
    </ContentLoader>
)

export default PizzaSkeleton
