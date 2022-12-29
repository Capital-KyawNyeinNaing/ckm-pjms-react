import styled from 'styled-components';
import { RxDashboard } from 'react-icons/rx';
import { FaTasks } from 'react-icons/fa';
import { HiUsers } from 'react-icons/hi';
import { TbDashboard, TbTypography } from 'react-icons/tb';
import { IoColorPaletteOutline } from 'react-icons/io5';

export const DashboardIcon = (props) => {
  return (
    <IconWrap {...props}>
      <TbDashboard />
    </IconWrap>
  );
};

export const ProjectIcon = (props) => {
  return (
    <IconWrap {...props}>
      <RxDashboard />
    </IconWrap>
  );
};

export const FaTasksIcon = (props) => {
  return (
    <IconWrap {...props}>
      <FaTasks />
    </IconWrap>
  );
};

export const HiUsersIcon = (props) => {
  return (
    <IconWrap {...props}>
      <HiUsers />
    </IconWrap>
  );
};

export const TbTypographyIcon = (props) => {
  return (
    <IconWrap {...props}>
      <TbTypography />
    </IconWrap>
  );
};

export const PaletteIcon = (props) => {
  return (
    <IconWrap {...props}>
      <IoColorPaletteOutline />
    </IconWrap>
  );
};

const IconWrap = styled.div`
  width: ${(props) => (props.width ? props.width : '35')}px;
  height: ${(props) => (props.height ? props.height : '35')}px;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    width: 100%;
    height: 100%;
    padding: 0;
    fill: ${(props) => (props.fillColor ? props.fillColor : props.theme.neutral300)};
    color: ${(props) => (props.color ? props.color : props.theme.neutral300)};
  }
`;
