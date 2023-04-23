import styled from 'styled-components';

const categories =[
    {
        name: 'all',
        text: '전체보기',
    },
    {
        name: 'Region',
        text: '지역'
    },
    {
        name: 'Toeic',
        text: "토익"
    },
    {
        name: 'License',
        text: '라이선스'
    },
    {
        name: 'etc..',
        text: '기타'
    }
];

const CategoriesBlock = styled.div`
    display: flex;
    padding: 1rem;
    width: 768px;
    margin: 0 auto;
    @media screen and (max-widht): 768px) {
        width: 100%;
        over-flow-x: auto;
    }
`;

const Category = styled.div`
    font-size: 1.125rem;
    cussor: pointer;
    white-space: pre;
    text-decoration: none;
    color: inherit;
    padding-bottom: 0.25rem;

    &:hover {
        color: #495057
    }

    & + & {
        margin-left: 1rem;
    }
`;

const Categories = () => { 
    return (
        <CategoriesBlock>
           {categories.map(c => (
            <Category key={c.name}>{c.text}</Category>
           ))} 
        </CategoriesBlock>
    );
};

export default Categories;

