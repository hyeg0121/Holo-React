import React, {useState} from "react";
import styles from "../../css/article/ArticleList.module.css"
import {Icon} from '@iconify/react';

function ArticleList() {

    const [selectedCategory, setSelectedCategory] = useState(1);

    // 카테고리 클릭 이벤트 리스너
    const handleCategoryClick = index => {
        setSelectedCategory(index);
    };

    return (
        <div id={styles['main']}>
            <div className={styles['category-container']}>
                {/*줄 맞춤을 위한 div*/}
                <div className={`${styles['category-item']} ${styles['no-category']}`}></div>
                <div
                    className={styles['category-item']}
                    onClick={() => handleCategoryClick(1)}
                    style={{
                        color: selectedCategory === 1 ? "rgba(3, 108, 231, 1)" : "#000",
                        borderBottomColor: selectedCategory === 1 ? "rgba(3, 108, 231, 1)" : "rgba(214, 214, 214, 1)"
                    }}
                >
                    주거
                </div>
                <div
                    className={styles['category-item']}
                    onClick={() => handleCategoryClick(2)}
                    style={{
                        color: selectedCategory === 2 ? "rgba(3, 108, 231, 1)" : "#000",
                        borderColor: selectedCategory === 2 ? "rgba(3, 108, 231, 1)" : "rgba(214, 214, 214, 1)"
                    }}
                >
                    비용
                </div>
                <div
                    className={styles['category-item']}
                    onClick={() => handleCategoryClick(3)}
                    style={{
                        color: selectedCategory === 3 ? "rgba(3, 108, 231, 1)" : "#000",
                        borderBottomColor: selectedCategory === 3 ? "rgba(3, 108, 231, 1)" : "rgba(214, 214, 214, 1)"
                    }}
                >
                    인테리어
                </div>
                <div
                    className={styles['category-item']}
                    onClick={() => handleCategoryClick(4)}
                    style={{
                        color: selectedCategory === 4 ? "rgba(3, 108, 231, 1)" : "#000",
                        borderBottomColor: selectedCategory === 4 ? "rgba(3, 108, 231, 1)" : "rgba(214, 214, 214, 1)"
                    }}
                >
                    기타
                </div>
                {/*줄 맞춤을 위한 div*/}
                <div className={`${styles['category-item']} ${styles['no-category']}`}></div>
            </div>
        </div>
    );
}

export default ArticleList;