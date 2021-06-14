import { Story, Meta } from '@storybook/react/types-6-0'
import Highlight, { HighLightProps } from '.'

export default {
  title: 'Highlight',
  component: Highlight,
  args: {
    title: "Read Dead it's back",
    subtitle: 'Venha conhecer as novas aventuras de John Marston',
    backgroundImage: '/img/read-dead-img.png',
    floatImage: '/img/read-dead-float.png',
    buttonLabel: 'Comprar agora',
    buttonLink: '/games/rdr2'
  },
  parameters: {
    layout: 'fullscreen'
  }
} as Meta

export const Default: Story<HighLightProps> = (args) => (
  <div style={{ maxWidth: '104rem' }}>
    <Highlight {...args} />
  </div>
)

export const WithLoadImage: Story<HighLightProps> = (args) => (
  <div style={{ maxWidth: '104rem' }}>
    <Highlight {...args} />
  </div>
)
