import styledComponents from 'styled-components';
import PropTypes from 'prop-types';

const Content = styledComponents.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 1.5rem;
`;

const ContentImg = styledComponents.div`
  flex: 1 1 45rem;
`;
const Image = styledComponents.img`
  width: 100%;
`;

const ContentDescription = styledComponents.div`
  flex: 1 1 45rem;
`;
const DescriptionTitle = styledComponents.h3`
  font-size: 4.5rem;
  color: var(--black);
  line-height: 1.8;
  text-shadow: var(--text-shadow);
`;
const DescriptionText = styledComponents.p`
  font-size: 1.7rem;
  color: var(--light-color);
  line-height: 1.8;
  padding: 1rem 0;
  margin: 0 1rem;
`;
const Button = styledComponents.button``;

function Slide({ contentSlide }) {
  return (
    <Content style={{ backgroundColor: `#${contentSlide.colorSlide}` }}>
      <ContentImg>
        <Image src={contentSlide.imgSlide} />
      </ContentImg>
      <ContentDescription>
        <DescriptionTitle>{contentSlide.titleSlide}</DescriptionTitle>
        <DescriptionText>{contentSlide.descriptionSlide}</DescriptionText>
        <Button className="btn-appointment">{contentSlide.textButton}</Button>
      </ContentDescription>
    </Content>
  );
}

Slide.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  contentSlide: PropTypes.object.isRequired,
};

export default Slide;
