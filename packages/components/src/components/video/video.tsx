/** @jsx jsx */
import { jsx, SxStyleProp } from 'theme-ui';
import { forwardRef } from 'react';

export interface VideoProps {
  controls: boolean;
  autoPlay: boolean;
  loop: boolean;
  muted: boolean;
  preload: 'auto' | 'metadata' | 'none';
  sources: Source[];
  poster?: string;
}

export interface Source {
  id: string;
  src: string;
  type: 'video/mp4' | 'video/webm';
}

const stylesVideo: SxStyleProp = {
  width: '100%',
  objectFit: 'cover',
};

const createStylesVideo = (): SxStyleProp => ({
  ...stylesVideo,
});

export const Media = forwardRef<HTMLVideoElement, VideoProps>((props, ref) => {
  const { sources } = props;

  return sources.length > 0 ? (
    <video
      sx={createStylesVideo()}
      autoPlay={true}
      controls={props.controls}
      loop={props.loop}
      muted={props.muted}
      preload={props.preload}
      poster={props.poster}
      playsInline={true}
      ref={ref}>
      {sources.map(source => (
        <source key={source.id} src={source.src} type={source.type} />
      ))}
    </video>
  ) : null;
});

Media.displayName = 'Media';
