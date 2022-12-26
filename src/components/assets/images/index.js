import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const { ProjectIcon, FaTasksIcon, HiUsersIcon, DashboardIcon } = require('./Icons');

const ImageWrap = (props) => {
  const obj = props?.sx;
  const entries = obj && Object.entries(obj);

  return (
    <Wrap {...props} entries={entries}>
      <div>
        <img src={props.src} alt={props.name || props.src} />
      </div>
    </Wrap>
  );
};

ImageWrap.propTypes = {
  src: PropTypes.string,
  name: PropTypes.string,
  title: PropTypes.string,
  sx: PropTypes.object
};

const ImageComponent = (props) => {
  switch (props.imageType) {
    case 'image':
      return <ImageWrap {...props} />;

    case 'dashboard':
      return <DashboardIcon {...props} />;

    case 'project':
      return <ProjectIcon {...props} />;

    case 'task':
      return <FaTasksIcon {...props} />;

    case 'member':
      return <HiUsersIcon {...props} />;

    default:
      return null;
  }
};

ImageComponent.propTypes = {
  imageType: PropTypes.any
};

export default ImageComponent;

const Wrap = styled.div`
  width: ${(props) => (props.width ? props.width : '50')}px;
  height: ${(props) => (props.height ? props.height : '50')}px;
  ${(props) =>
    props?.entries &&
    props.entries.map(
      ([key, val]) => css`
        ${key}: ${val};
      `
    )}
  img,
  svg {
    width: ${(props) => (props.width ? props.width : '36')}px;
    height: ${(props) => (props.width ? props.height : '36')}px;
    color: ${(props) => (props.color ? props.color : 'black')};
    ${({ fullWidth }) =>
      fullWidth &&
      css`
        width: 100%;
        height: 100%;
      `}
  }
`;
