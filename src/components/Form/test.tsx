import { render } from 'utils/test-utils'

import { FormLink, FormWrapper } from '.'

describe('<Form />', () => {
  it('should render the heading', () => {
    const { container } = render(
      <FormWrapper>
        <FormLink>
          This is a <a>link</a>
        </FormLink>
      </FormWrapper>
    )

    expect(container.parentElement).toMatchInlineSnapshot(`
      .c0 {
        text-align: center;
        color: #030517;
        font-size: 1.4rem;
      }

      .c0 a {
        border-bottom: 0.1rem solid #3CD3C1;
        color: #3CD3C1;
        -webkit-text-decoration: none;
        text-decoration: none;
        margin-left: 0.4rem;
        -webkit-transition: color,border,0.1s ease-in-out;
        transition: color,border,0.1s ease-in-out;
      }

      .c0 a:hover {
        color: #29b3a3;
        border-bottom: 0.1rem solid #29b3a3;
      }

      <body>
        <div>
          <main
            class=""
          >
            <div
              class="c0"
            >
              This is a 
              <a>
                link
              </a>
            </div>
          </main>
        </div>
      </body>
    `)
  })
})
