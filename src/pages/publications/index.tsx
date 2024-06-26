import Head from 'next/head'
import Link from 'next/link'

import { css } from '@linaria/core'
import { useTranslation } from 'next-export-i18n'

import { ArticleContainer } from '@/components/template/ArticleContainer'
import { ExternalLink } from '@/components/typography/ExternalLink'
import { Heading } from '@/components/typography/Heading'
import { textStyle } from '@/components/typography/Text'
import { Title } from '@/components/typography/Title'
import {
  articlesList,
  collaborateList
} from '@/content/publications'
import { Color, FontWeight } from '@/styles/StyleToken'

export default function Publications() {
  const { t } = useTranslation()

  return (
    <>
      <Head>
        <title>Publications｜辻村研究室｜名古屋市立大学芸術工学部</title>
      </Head>

      <ArticleContainer>
        <Title>{t('publications.structure.heading')}</Title>
        <section>
          <Heading>{t('publications.structure.articles')}</Heading>
          {/* <SubHeading>{t('publications.section.selectedArticles.subheading')}</SubHeading> */}
          <ul className={listStyle}>
            {articlesList.map((item, index) => (
              <li key={`publication${index}`}>
                {item.link ? (
                  <ExternalLink link={item.link} isBold>
                    {item.title}
                  </ExternalLink>
                ) : (
                  <p className={articleTitle}>{item.title}</p>
                )}
                <span className={translate}>{item.translation}</span>
              </li>
            ))}
          </ul>
          <Link href='https://researchmap.jp/read0118613/published_papers?lang=ja' className={viewMore}>
          {t('more')}
          </Link>
        </section>
        <section>
          <Heading>{t('publications.structure.collabs')}</Heading>
          <ul className={listStyle}>
            {collaborateList.map((item, index) => (
              <li key={`collaborate${index}`} className={clListItem}>
                <ul>
                  {item.heading}
                  {item.content.map((subItem, subIndex) => (
                    <li key={`content${subIndex}`} className={clSubListItem}>
                      {subItem}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </section>
        {/* <section>
          <Heading>{t('publications.structure.media')}</Heading>
          <ul className={listStyle}>
            {mediaList.map((item, index) => (
              <li key={`media${index}`} className={newsItem}>
                <span>{item.date}</span>
                <div>
                  <p>{item.heading}</p>
                  {item.link ? (
                    <ExternalLink link={item.link}>{item.media}</ExternalLink>
                  ) : (
                    <p>{item.media}</p>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </section> */}
      </ArticleContainer>
    </>
  )
}

const listStyle = css`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin: 20px 0;
`

const articleTitle = css`
  margin: 0;
  font-weight: ${FontWeight.bold};
  ${textStyle};
`

const translate = css`
  display: inline-block;
  font-size: 1rem;
  line-height: 1.25rem;
  color: rgb(33 33 33 / 60%);
`

const clListItem = css`
  position: relative;
  padding-inline-start: 20px;
  font-weight: ${FontWeight.bold};
  ${textStyle};

  &::before {
    position: absolute;
    top: 0;
    left: 0;
    content: '・';
  }
`

const clSubListItem = css`
  position: relative;
  padding-inline-start: 20px;
  font-weight: ${FontWeight.regular};
  ${textStyle};

  &::before {
    position: absolute;
    top: 0;
    left: 0;
    content: '・';
  }
`

const newsItem = css`
  display: inline-flex;
  ${textStyle};

  span {
    display: inline-block;
    min-width: 120px;
  }
`

const viewMore = css`
  align-self: flex-end;
  font-weight: ${FontWeight.regular};
  text-decoration: underline;
  transition: 0.2s;
  ${textStyle};

  &:hover {
    color: ${Color.main_grey};
  }
`