
//role - "body", "heading", "label"
//size - "sm", "md", "lg", "xl"
//as - "p", "span", "h1", "h2", "h3", "h4", "h5", "h6"

export default function Text({ children, as, className }){

    const Tag = as;

    return(
        <Tag className={className}>{children}</Tag>
    );
}