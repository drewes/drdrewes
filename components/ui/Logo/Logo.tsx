import cn from 'classnames'
import s from './Logo.module.css'

interface Props {
  dark?: boolean
  className?: string
  logotype?: boolean
}

const Logo = ({ dark = false, className = '', logotype, ...props }: Props) => {
  const svgClassName = cn(
    {
      [s.dark]: dark
    },
    className
  )

  const typeClassName = cn(
    { [s.dark]: dark }
  )

  return (
    <svg
      width='100%'
      height='100%'
      viewBox="0 0 3408 575"
      version='1.1'
      xmlns='http://www.w3.org/2000/svg'
      style={{ fillRule: 'evenodd', clipRule: 'evenodd', strokeLinejoin: 'round', strokeMiterlimit: 2 }}
      className={svgClassName}
      {...props}
    >
      <g transform='matrix(1,0,0,1,-25.9445,-21.8024)'>
        {logotype && (
          <g transform='matrix(2.88681,0,0,0.514381,0,0)'>
            <g id='Type' transform='matrix(0.346403,0,0,1.94409,-131.296,-435.063)'>
              <g transform='matrix(400,0,0,400,1019.75,674.216)'>
                <path
                  d='M0.13,-0L0.13,-0.7L0.36,-0.7C0.415,-0.7 0.466,-0.691 0.512,-0.674C0.558,-0.656 0.598,-0.632 0.631,-0.601C0.664,-0.57 0.689,-0.533 0.708,-0.49C0.726,-0.447 0.735,-0.401 0.735,-0.352C0.735,-0.301 0.725,-0.254 0.707,-0.211C0.688,-0.167 0.662,-0.13 0.629,-0.099C0.596,-0.068 0.557,-0.043 0.513,-0.026C0.469,-0.009 0.422,-0 0.372,-0L0.13,-0ZM0.221,-0.044L0.331,-0.044C0.386,-0.044 0.432,-0.053 0.471,-0.072C0.509,-0.09 0.54,-0.114 0.565,-0.143C0.59,-0.172 0.608,-0.205 0.619,-0.242C0.63,-0.278 0.636,-0.314 0.636,-0.35C0.636,-0.39 0.629,-0.429 0.616,-0.466C0.603,-0.503 0.583,-0.535 0.558,-0.564C0.532,-0.592 0.5,-0.614 0.462,-0.631C0.424,-0.648 0.38,-0.656 0.331,-0.656L0.221,-0.656L0.221,-0.044Z'
                  style={{ fillRule: 'nonzero' }} />
              </g>
              <g transform='matrix(400,0,0,400,1305.75,674.216)'>
                <path
                  d='M0.08,-0.5L0.08,-0L0.165,-0L0.165,-0.302C0.165,-0.329 0.168,-0.353 0.175,-0.372C0.181,-0.391 0.189,-0.406 0.199,-0.418C0.209,-0.43 0.22,-0.439 0.232,-0.444C0.244,-0.449 0.256,-0.452 0.267,-0.452C0.282,-0.452 0.297,-0.447 0.31,-0.437C0.323,-0.427 0.332,-0.418 0.338,-0.409L0.372,-0.471C0.366,-0.479 0.359,-0.486 0.351,-0.491C0.342,-0.496 0.334,-0.501 0.326,-0.504C0.317,-0.507 0.31,-0.509 0.303,-0.51C0.296,-0.511 0.29,-0.511 0.287,-0.511C0.259,-0.511 0.236,-0.503 0.217,-0.488C0.198,-0.473 0.183,-0.45 0.171,-0.42L0.165,-0.42L0.165,-0.5L0.08,-0.5Z'
                  style={{ fillRule: 'nonzero' }} />
              </g>
              <g transform='matrix(400,0,0,400,1558.55,674.216)'>
                <path
                  d='M0.12,-0.7L0.12,-0L0.572,-0L0.572,-0.055L0.211,-0.055L0.211,-0.348L0.521,-0.348L0.521,-0.394L0.211,-0.394L0.211,-0.645L0.572,-0.645L0.572,-0.7L0.12,-0.7Z'
                  style={{ fillRule: 'nonzero' }} />
              </g>
              <g transform='matrix(400,0,0,400,1779.35,674.216)'>
                <path
                  d='M0.08,-0.5L0.08,-0L0.165,-0L0.165,-0.302C0.165,-0.329 0.168,-0.353 0.175,-0.372C0.181,-0.391 0.189,-0.406 0.199,-0.418C0.209,-0.43 0.22,-0.439 0.232,-0.444C0.244,-0.449 0.256,-0.452 0.267,-0.452C0.282,-0.452 0.297,-0.447 0.31,-0.437C0.323,-0.427 0.332,-0.418 0.338,-0.409L0.372,-0.471C0.366,-0.479 0.359,-0.486 0.351,-0.491C0.342,-0.496 0.334,-0.501 0.326,-0.504C0.317,-0.507 0.31,-0.509 0.303,-0.51C0.296,-0.511 0.29,-0.511 0.287,-0.511C0.259,-0.511 0.236,-0.503 0.217,-0.488C0.198,-0.473 0.183,-0.45 0.171,-0.42L0.165,-0.42L0.165,-0.5L0.08,-0.5Z'
                  style={{ fillRule: 'nonzero' }} />
              </g>
              <g transform='matrix(400,0,0,400,1912.15,674.216)'>
                <path
                  d='M0.112,-0.5L0.112,-0L0.197,-0L0.197,-0.5L0.112,-0.5ZM0.1,-0.658C0.1,-0.643 0.105,-0.631 0.116,-0.62C0.127,-0.609 0.139,-0.604 0.154,-0.604C0.169,-0.604 0.181,-0.609 0.192,-0.62C0.203,-0.631 0.208,-0.643 0.208,-0.658C0.208,-0.673 0.203,-0.685 0.192,-0.696C0.181,-0.707 0.169,-0.712 0.154,-0.712C0.139,-0.712 0.127,-0.707 0.116,-0.696C0.105,-0.685 0.1,-0.673 0.1,-0.658Z'
                  style={{ fillRule: 'nonzero' }} />
              </g>
              <g transform='matrix(400,0,0,400,2015.35,674.216)'>
                <path
                  d='M0.165,-0.7L0.08,-0.7L0.08,-0L0.165,-0L0.165,-0.188L0.223,-0.247L0.424,-0L0.536,-0L0.285,-0.308L0.476,-0.5L0.411,-0.5L0.165,-0.252L0.165,-0.7Z'
                  style={{ fillRule: 'nonzero' }} />
              </g>
              <g transform='matrix(400,0,0,400,2209.75,674.216)'>
                <path
                  d='M0.264,-0.511C0.313,-0.511 0.35,-0.504 0.377,-0.491C0.404,-0.477 0.423,-0.459 0.436,-0.437C0.448,-0.415 0.455,-0.39 0.457,-0.361C0.459,-0.332 0.46,-0.303 0.46,-0.273L0.46,-0L0.379,-0L0.379,-0.049C0.36,-0.03 0.335,-0.016 0.305,-0.005C0.275,0.007 0.245,0.012 0.215,0.012C0.186,0.012 0.161,0.007 0.139,-0.003C0.117,-0.013 0.099,-0.026 0.084,-0.042C0.069,-0.058 0.058,-0.076 0.051,-0.096C0.044,-0.116 0.04,-0.136 0.04,-0.157C0.04,-0.178 0.044,-0.2 0.052,-0.221C0.06,-0.242 0.072,-0.262 0.088,-0.279C0.104,-0.296 0.124,-0.309 0.147,-0.32C0.17,-0.331 0.197,-0.336 0.227,-0.336C0.257,-0.336 0.286,-0.33 0.313,-0.319C0.339,-0.307 0.362,-0.29 0.379,-0.269L0.379,-0.312C0.379,-0.367 0.371,-0.407 0.355,-0.434C0.338,-0.461 0.308,-0.474 0.265,-0.474C0.246,-0.474 0.23,-0.472 0.216,-0.467C0.202,-0.462 0.19,-0.456 0.179,-0.448C0.167,-0.439 0.157,-0.429 0.148,-0.417C0.139,-0.404 0.129,-0.39 0.12,-0.375L0.068,-0.427C0.077,-0.437 0.087,-0.447 0.098,-0.457C0.108,-0.467 0.121,-0.476 0.136,-0.484C0.151,-0.492 0.168,-0.499 0.189,-0.504C0.21,-0.509 0.235,-0.511 0.264,-0.511ZM0.379,-0.198C0.376,-0.206 0.371,-0.215 0.365,-0.226C0.358,-0.237 0.35,-0.247 0.34,-0.257C0.33,-0.267 0.318,-0.276 0.304,-0.283C0.29,-0.29 0.273,-0.293 0.254,-0.293C0.235,-0.293 0.217,-0.289 0.201,-0.282C0.185,-0.274 0.171,-0.264 0.161,-0.252C0.15,-0.239 0.141,-0.225 0.135,-0.208C0.129,-0.191 0.126,-0.174 0.126,-0.156C0.126,-0.135 0.13,-0.116 0.138,-0.101C0.145,-0.085 0.155,-0.071 0.167,-0.061C0.179,-0.049 0.192,-0.041 0.207,-0.036C0.222,-0.031 0.236,-0.028 0.249,-0.028C0.262,-0.028 0.275,-0.03 0.288,-0.035C0.301,-0.04 0.313,-0.046 0.325,-0.055C0.336,-0.063 0.347,-0.073 0.356,-0.084C0.365,-0.095 0.373,-0.108 0.379,-0.121L0.379,-0.198Z'
                  style={{ fillRule: 'nonzero' }} />
              </g>
              <g transform='matrix(400,0,0,400,2525.75,674.216)'>
                <path
                  d='M0.13,-0L0.13,-0.7L0.36,-0.7C0.415,-0.7 0.466,-0.691 0.512,-0.674C0.558,-0.656 0.598,-0.632 0.631,-0.601C0.664,-0.57 0.689,-0.533 0.708,-0.49C0.726,-0.447 0.735,-0.401 0.735,-0.352C0.735,-0.301 0.725,-0.254 0.707,-0.211C0.688,-0.167 0.662,-0.13 0.629,-0.099C0.596,-0.068 0.557,-0.043 0.513,-0.026C0.469,-0.009 0.422,-0 0.372,-0L0.13,-0ZM0.221,-0.044L0.331,-0.044C0.386,-0.044 0.432,-0.053 0.471,-0.072C0.509,-0.09 0.54,-0.114 0.565,-0.143C0.59,-0.172 0.608,-0.205 0.619,-0.242C0.63,-0.278 0.636,-0.314 0.636,-0.35C0.636,-0.39 0.629,-0.429 0.616,-0.466C0.603,-0.503 0.583,-0.535 0.558,-0.564C0.532,-0.592 0.5,-0.614 0.462,-0.631C0.424,-0.648 0.38,-0.656 0.331,-0.656L0.221,-0.656L0.221,-0.044Z'
                  style={{ fillRule: 'nonzero' }} />
              </g>
              <g transform='matrix(400,0,0,400,2811.75,674.216)'>
                <path
                  d='M0.08,-0.5L0.08,-0L0.165,-0L0.165,-0.302C0.165,-0.329 0.168,-0.353 0.175,-0.372C0.181,-0.391 0.189,-0.406 0.199,-0.418C0.209,-0.43 0.22,-0.439 0.232,-0.444C0.244,-0.449 0.256,-0.452 0.267,-0.452C0.282,-0.452 0.297,-0.447 0.31,-0.437C0.323,-0.427 0.332,-0.418 0.338,-0.409L0.372,-0.471C0.366,-0.479 0.359,-0.486 0.351,-0.491C0.342,-0.496 0.334,-0.501 0.326,-0.504C0.317,-0.507 0.31,-0.509 0.303,-0.51C0.296,-0.511 0.29,-0.511 0.287,-0.511C0.259,-0.511 0.236,-0.503 0.217,-0.488C0.198,-0.473 0.183,-0.45 0.171,-0.42L0.165,-0.42L0.165,-0.5L0.08,-0.5Z'
                  style={{ fillRule: 'nonzero' }} />
              </g>
              <g transform='matrix(400,0,0,400,2944.55,674.216)'>
                <path
                  d='M0.524,-0.228L0.524,-0.249C0.524,-0.294 0.518,-0.332 0.505,-0.365C0.492,-0.398 0.475,-0.425 0.454,-0.446C0.432,-0.467 0.407,-0.483 0.378,-0.494C0.349,-0.505 0.319,-0.51 0.287,-0.51C0.253,-0.51 0.222,-0.504 0.193,-0.493C0.164,-0.481 0.139,-0.464 0.118,-0.442C0.097,-0.419 0.08,-0.392 0.068,-0.361C0.056,-0.329 0.05,-0.293 0.05,-0.253C0.05,-0.22 0.055,-0.187 0.066,-0.156C0.076,-0.124 0.092,-0.095 0.113,-0.071C0.134,-0.046 0.16,-0.025 0.193,-0.011C0.225,0.005 0.263,0.012 0.307,0.012C0.35,0.012 0.389,0.005 0.425,-0.011C0.461,-0.025 0.492,-0.047 0.519,-0.075L0.487,-0.107C0.473,-0.095 0.46,-0.084 0.448,-0.074C0.435,-0.064 0.423,-0.056 0.41,-0.049C0.397,-0.042 0.384,-0.037 0.371,-0.034C0.357,-0.03 0.342,-0.028 0.325,-0.028C0.306,-0.028 0.286,-0.031 0.266,-0.037C0.245,-0.042 0.225,-0.052 0.207,-0.067C0.189,-0.082 0.174,-0.102 0.162,-0.128C0.15,-0.154 0.144,-0.187 0.144,-0.228L0.524,-0.228ZM0.144,-0.268C0.144,-0.295 0.147,-0.321 0.153,-0.346C0.158,-0.371 0.167,-0.393 0.179,-0.412C0.19,-0.431 0.205,-0.447 0.223,-0.459C0.241,-0.47 0.262,-0.476 0.287,-0.476C0.334,-0.476 0.371,-0.458 0.398,-0.421C0.424,-0.384 0.437,-0.333 0.437,-0.268L0.144,-0.268Z'
                  style={{ fillRule: 'nonzero' }} />
              </g>
              <g transform='matrix(400,0,0,400,3154.15,674.216)'>
                <path
                  d='M0.02,-0.5L0.193,-0L0.247,-0L0.363,-0.335L0.367,-0.335L0.497,-0L0.544,-0L0.726,-0.5L0.674,-0.5L0.538,-0.126L0.534,-0.126L0.392,-0.5L0.372,-0.5L0.241,-0.123L0.237,-0.123L0.107,-0.5L0.02,-0.5Z'
                  style={{ fillRule: 'nonzero' }} />
              </g>
              <g transform='matrix(400,0,0,400,3432.55,674.216)'>
                <path
                  d='M0.524,-0.228L0.524,-0.249C0.524,-0.294 0.518,-0.332 0.505,-0.365C0.492,-0.398 0.475,-0.425 0.454,-0.446C0.432,-0.467 0.407,-0.483 0.378,-0.494C0.349,-0.505 0.319,-0.51 0.287,-0.51C0.253,-0.51 0.222,-0.504 0.193,-0.493C0.164,-0.481 0.139,-0.464 0.118,-0.442C0.097,-0.419 0.08,-0.392 0.068,-0.361C0.056,-0.329 0.05,-0.293 0.05,-0.253C0.05,-0.22 0.055,-0.187 0.066,-0.156C0.076,-0.124 0.092,-0.095 0.113,-0.071C0.134,-0.046 0.16,-0.025 0.193,-0.011C0.225,0.005 0.263,0.012 0.307,0.012C0.35,0.012 0.389,0.005 0.425,-0.011C0.461,-0.025 0.492,-0.047 0.519,-0.075L0.487,-0.107C0.473,-0.095 0.46,-0.084 0.448,-0.074C0.435,-0.064 0.423,-0.056 0.41,-0.049C0.397,-0.042 0.384,-0.037 0.371,-0.034C0.357,-0.03 0.342,-0.028 0.325,-0.028C0.306,-0.028 0.286,-0.031 0.266,-0.037C0.245,-0.042 0.225,-0.052 0.207,-0.067C0.189,-0.082 0.174,-0.102 0.162,-0.128C0.15,-0.154 0.144,-0.187 0.144,-0.228L0.524,-0.228ZM0.144,-0.268C0.144,-0.295 0.147,-0.321 0.153,-0.346C0.158,-0.371 0.167,-0.393 0.179,-0.412C0.19,-0.431 0.205,-0.447 0.223,-0.459C0.241,-0.47 0.262,-0.476 0.287,-0.476C0.334,-0.476 0.371,-0.458 0.398,-0.421C0.424,-0.384 0.437,-0.333 0.437,-0.268L0.144,-0.268Z'
                  style={{ fillRule: 'nonzero' }} />
              </g>
              <g transform='matrix(400,0,0,400,3642.15,674.216)'>
                <path
                  d='M0.399,-0.386C0.399,-0.404 0.394,-0.421 0.385,-0.436C0.376,-0.451 0.363,-0.464 0.347,-0.476C0.33,-0.487 0.311,-0.495 0.29,-0.502C0.268,-0.508 0.245,-0.511 0.22,-0.511C0.197,-0.511 0.175,-0.508 0.155,-0.502C0.134,-0.496 0.117,-0.487 0.102,-0.475C0.087,-0.463 0.075,-0.448 0.066,-0.431C0.057,-0.413 0.053,-0.392 0.053,-0.369C0.053,-0.337 0.06,-0.312 0.075,-0.293C0.09,-0.274 0.108,-0.259 0.13,-0.248C0.152,-0.237 0.176,-0.228 0.202,-0.221C0.227,-0.214 0.251,-0.206 0.273,-0.198C0.295,-0.189 0.313,-0.179 0.328,-0.166C0.343,-0.153 0.35,-0.136 0.35,-0.114C0.35,-0.105 0.349,-0.095 0.346,-0.085C0.343,-0.075 0.337,-0.066 0.329,-0.058C0.321,-0.049 0.31,-0.042 0.296,-0.037C0.282,-0.031 0.264,-0.028 0.243,-0.028C0.216,-0.028 0.194,-0.032 0.176,-0.041C0.157,-0.049 0.142,-0.059 0.131,-0.071C0.119,-0.082 0.111,-0.094 0.106,-0.106C0.1,-0.118 0.098,-0.128 0.098,-0.136L0.033,-0.136C0.033,-0.117 0.037,-0.099 0.046,-0.082C0.055,-0.064 0.068,-0.048 0.086,-0.034C0.103,-0.02 0.125,-0.009 0.151,-0.001C0.176,0.008 0.206,0.012 0.24,0.012C0.301,0.012 0.347,-0.002 0.379,-0.029C0.409,-0.056 0.425,-0.091 0.425,-0.135C0.425,-0.167 0.418,-0.193 0.403,-0.212C0.388,-0.231 0.369,-0.247 0.346,-0.259C0.323,-0.27 0.299,-0.28 0.273,-0.287C0.246,-0.294 0.222,-0.302 0.199,-0.31C0.176,-0.318 0.158,-0.328 0.143,-0.339C0.128,-0.35 0.12,-0.366 0.12,-0.387C0.12,-0.396 0.122,-0.405 0.125,-0.415C0.128,-0.424 0.134,-0.433 0.142,-0.442C0.15,-0.45 0.161,-0.457 0.174,-0.463C0.187,-0.468 0.204,-0.471 0.224,-0.471C0.244,-0.471 0.261,-0.468 0.276,-0.463C0.291,-0.457 0.303,-0.45 0.313,-0.442C0.323,-0.433 0.33,-0.424 0.335,-0.414C0.34,-0.404 0.342,-0.395 0.342,-0.386L0.399,-0.386Z'
                  style={{ fillRule: 'nonzero' }} />
              </g>
            </g>
          </g>
        )}
        <g transform='matrix(2.31173,0,0,0.514381,0,0)'>
          <g id='Logo' transform='matrix(0.432577,0,0,1.94409,-129.565,-565.42)'>
            <path
              d='M600.454,318.096C579.166,306.389 552.436,314.156 540.728,335.444C529.049,356.733 536.816,383.463 558.104,395.17C579.393,406.877 606.124,399.082 617.831,377.823C629.509,356.533 621.742,329.774 600.454,318.096ZM396.359,423.375C362.315,516.039 382.498,621.856 450.813,695.557C490.441,700.375 533.67,691.248 571.257,666.531C580.13,660.662 590.788,645.922 601.163,656.44C616.045,671.463 576.757,689.463 567.771,694.678C580.838,698.647 605.472,693.856 641.585,680.28C679.342,666.133 682.772,689.774 648.501,698.194C606.265,708.625 597.591,712.791 597.591,712.791C604.734,716.194 624.322,716.336 656.325,713.246C695.5,709.475 694.196,734.024 657.119,735.696C639.855,736.49 620.325,736.319 598.583,735.186C603.062,741.649 622.961,745.504 658.281,746.75C682.404,747.602 681.015,764.58 657.062,764.156C635.377,763.758 614.315,760.328 597.223,760.668C602.41,766.905 617.887,771.156 627.979,770.959C644.986,770.619 649.494,776.231 644.533,780.823C663.752,780.908 682.914,778.924 701.679,774.899C786.039,682.914 925.729,602.836 855.346,477.092C863.226,515.33 829.834,557.453 792.189,575.653C701.396,619.561 570.378,635.52 470.315,619.248C444.945,615.11 441.516,599.264 468.927,603.375C478.933,604.848 494.807,602.61 500.76,597.11C483.837,594.588 462.492,595.295 440.949,592.887C417.138,590.25 417.96,573.213 441.998,575.483C477.175,578.77 497.415,577.494 502.688,571.655C480.945,569.983 461.585,567.658 444.577,564.682C407.981,558.246 409.853,533.727 448.233,542.487C479.585,549.658 499.002,552.01 506.542,549.573C506.542,549.573 498.464,544.328 457.928,528.596C424.99,515.813 431.453,492.823 467.056,511.701C501.156,529.787 524.939,537.696 538.432,535.457C530.184,529.108 493.531,506.231 510.199,493.221C521.878,484.121 530.523,500.137 538.602,507.053C603.374,562.811 814.243,554.221 824.25,483.865C833.037,422.24 663.61,353.699 556.148,489.762C560.372,477.629 565.673,465.865 572.022,454.584C526.498,388.764 451.664,387.006 396.359,423.375Z'
              style={{ fill: 'rgb(184,46,97)' }}
            />
            <path
              d='M437.547,513.969C426.832,523.438 416.883,534.067 407.868,545.86C382.838,578.543 368.155,615.875 363.251,653.973C412.857,704.686 501.724,712.254 571.257,666.531C580.13,660.662 590.788,645.922 601.163,656.44C616.045,671.463 576.757,689.463 567.771,694.678C580.838,698.647 605.472,693.856 641.585,680.28C679.342,666.133 682.772,689.774 648.501,698.194C606.265,708.625 597.591,712.791 597.591,712.791C604.734,716.194 624.322,716.336 656.325,713.246C695.5,709.475 694.196,734.024 657.119,735.696C639.855,736.49 620.325,736.319 598.583,735.186C603.062,741.649 622.961,745.504 658.281,746.75C682.404,747.602 681.015,764.58 657.062,764.156C635.377,763.758 614.315,760.328 597.223,760.668C602.41,766.905 617.887,771.156 627.979,770.959C655.701,770.42 650.259,785.699 624.549,786.522C573.894,788.164 516.604,780.823 461.443,766.198C490.271,800.071 567.005,854.61 644.051,887.434C647.594,802.821 744.596,738.416 811.635,667.465C809.481,636.539 801.005,606.123 786.492,578.344C695.981,620.184 568.31,635.18 470.315,619.248C444.945,615.11 441.516,599.264 468.927,603.375C478.933,604.848 494.807,602.61 500.76,597.11C483.837,594.588 462.492,595.295 440.949,592.887C417.138,590.25 417.96,573.213 441.998,575.483C477.175,578.77 497.415,577.494 502.688,571.655C480.945,569.983 461.585,567.658 444.577,564.682C407.981,558.246 409.853,533.727 448.233,542.487C479.585,549.658 499.002,552.01 506.542,549.573C506.542,549.573 498.464,544.328 457.928,528.596C446.646,524.203 439.985,518.647 437.547,513.969ZM723.79,503.936C682.914,472.612 634.725,457.475 586.904,457.504C576.274,466.66 565.928,477.346 556.148,489.762C559.919,478.905 564.567,468.303 570.095,458.127C526.526,461.387 484.035,477.205 448.517,504.842C453.336,505.608 459.544,507.705 467.056,511.701C501.156,529.787 524.939,537.696 538.432,535.457C530.184,529.108 493.531,506.231 510.199,493.221C521.878,484.121 530.523,500.137 538.602,507.053C581.037,543.592 686.202,552.492 756.501,534.522C746.807,523.465 735.922,513.205 723.79,503.936Z'
              style={{ fill: 'rgb(177,191,218)' }}
            />
            <path
              d='M437.547,513.969C426.832,523.438 416.883,534.067 407.868,545.86C400.102,555.979 393.383,566.553 387.601,577.438C398.004,620.694 419.264,661.541 450.813,695.557C490.441,700.375 533.67,691.248 571.257,666.531C580.13,660.662 590.788,645.922 601.163,656.44C616.045,671.463 576.757,689.463 567.771,694.678C580.838,698.647 605.472,693.856 641.585,680.28C679.342,666.133 682.772,689.774 648.501,698.194C606.265,708.625 597.591,712.791 597.591,712.791C604.734,716.194 624.322,716.336 656.325,713.246C695.5,709.475 694.196,734.024 657.119,735.696C639.855,736.49 620.325,736.319 598.583,735.186C603.062,741.649 622.961,745.504 658.281,746.75C682.404,747.602 681.015,764.58 657.062,764.156C635.377,763.758 614.315,760.328 597.223,760.668C602.41,766.905 617.887,771.156 627.979,770.959C644.986,770.619 649.494,776.231 644.562,780.823C663.752,780.908 682.914,778.924 701.679,774.899C735.128,738.416 777.308,703.807 811.607,667.465C809.481,636.539 801.034,606.123 786.492,578.344C695.981,620.184 568.31,635.18 470.315,619.248C444.945,615.11 441.516,599.264 468.927,603.375C478.933,604.848 494.807,602.61 500.76,597.11C483.837,594.588 462.492,595.295 440.949,592.887C417.138,590.25 417.96,573.213 441.998,575.483C477.175,578.77 497.415,577.494 502.688,571.655C480.945,569.983 461.585,567.658 444.577,564.682C407.981,558.246 409.853,533.727 448.233,542.487C479.585,549.658 499.002,552.01 506.542,549.573C506.542,549.573 498.464,544.328 457.928,528.596C446.646,524.203 439.985,518.647 437.547,513.969ZM723.79,503.906C682.914,472.612 634.725,457.475 586.904,457.504C576.274,466.66 565.928,477.346 556.148,489.762C559.919,478.905 564.567,468.303 570.095,458.127C526.526,461.387 484.035,477.205 448.517,504.842C453.336,505.608 459.544,507.705 467.056,511.701C501.156,529.787 524.939,537.696 538.432,535.457C530.184,529.108 493.531,506.231 510.199,493.221C521.878,484.121 530.523,500.137 538.602,507.053C581.037,543.592 686.202,552.492 756.501,534.522C746.807,523.465 735.922,513.205 723.79,503.906Z'
              style={{ fill: 'rgb(90,121,171)' }}
            />
            <path
              d='M601.276,656.553C608.391,645.498 614.089,633.905 618.397,621.942C567.09,627.356 515.557,626.59 470.315,619.248C444.945,615.11 441.516,599.264 468.927,603.375C478.933,604.848 494.807,602.61 500.76,597.11C483.837,594.588 462.492,595.295 440.949,592.887C417.138,590.25 417.96,573.213 441.998,575.483C477.175,578.77 497.415,577.494 502.688,571.655C480.945,569.983 461.585,567.658 444.577,564.682C407.981,558.246 409.853,533.727 448.233,542.487C479.585,549.658 499.002,552.01 506.542,549.573C506.542,549.573 498.464,544.328 457.928,528.596C424.99,515.813 431.453,492.823 467.056,511.701C501.156,529.787 524.939,537.696 538.432,535.457C530.184,529.108 493.531,506.231 510.199,493.221C521.878,484.121 530.523,500.137 538.602,507.053C558.02,523.778 590.618,534.719 626.986,539.936C622.763,509.237 610.347,479.643 590.193,454.754C578.372,464.533 566.949,476.1 556.148,489.762C560.372,477.629 565.673,465.865 572.022,454.584C493.078,340.434 326.032,418.924 325.465,554.93C324.955,685.778 469.04,733.768 571.257,666.531C580.13,660.662 590.788,645.922 601.163,656.44L601.276,656.553ZM567.998,694.764L568.763,694.112L567.771,694.678L567.998,694.764Z'
              style={{ fill: 'rgb(113,178,137)' }}
            />
            <path
              d='M626.958,539.936C622.933,510.369 611.254,481.854 592.404,457.561C590.562,457.531 588.747,457.504 586.904,457.504C576.274,466.66 565.928,477.346 556.148,489.762C559.919,478.905 564.567,468.303 570.095,458.127C526.526,461.387 484.035,477.205 448.489,504.842C453.336,505.608 459.544,507.705 467.056,511.701C501.156,529.787 524.939,537.696 538.432,535.457C530.184,529.108 493.531,506.231 510.199,493.221C521.878,484.121 530.523,500.137 538.602,507.053C558.02,523.778 590.618,534.719 626.958,539.936ZM601.305,656.553C608.391,645.498 614.089,633.905 618.397,621.942C567.09,627.356 515.557,626.59 470.315,619.248C444.945,615.11 441.516,599.264 468.927,603.375C478.933,604.848 494.807,602.61 500.76,597.11C483.837,594.588 462.492,595.295 440.949,592.887C417.138,590.25 417.96,573.213 441.998,575.483C477.175,578.77 497.415,577.494 502.688,571.655C480.945,569.983 461.585,567.658 444.577,564.682C407.981,558.246 409.853,533.727 448.233,542.487C479.585,549.658 499.002,552.01 506.542,549.573C506.542,549.573 498.464,544.328 457.928,528.596C446.646,524.203 439.985,518.647 437.547,513.942C426.832,523.438 416.883,534.067 407.868,545.86C382.838,578.543 368.155,615.875 363.251,653.973C412.857,704.686 501.724,712.254 571.257,666.531C580.13,660.662 590.788,645.922 601.163,656.44L601.305,656.553ZM568.026,694.764L568.734,694.141L567.771,694.678L568.026,694.764Z'
              style={{ fill: 'rgb(224,198,181)' }}
            />
            <path
              d='M568.026,694.764L568.763,694.112L567.771,694.678L568.026,694.764ZM396.388,423.375C362.344,516.01 382.47,621.856 450.813,695.557C490.441,700.375 533.67,691.248 571.257,666.531C580.13,660.662 590.788,645.922 601.163,656.44L601.276,656.553C608.391,645.498 614.089,633.905 618.397,621.942C567.09,627.356 515.557,626.59 470.315,619.248C444.945,615.11 441.516,599.264 468.927,603.375C478.933,604.848 494.807,602.61 500.76,597.11C483.837,594.588 462.492,595.295 440.949,592.887C417.138,590.25 417.96,573.213 441.998,575.483C477.175,578.77 497.415,577.494 502.688,571.655C480.945,569.983 461.585,567.658 444.577,564.682C407.981,558.246 409.853,533.727 448.233,542.487C479.585,549.658 499.002,552.01 506.542,549.573C506.542,549.573 498.464,544.328 457.928,528.596C424.99,515.813 431.453,492.823 467.056,511.701C501.156,529.787 524.939,537.696 538.432,535.457C530.184,529.108 493.531,506.231 510.199,493.221C521.878,484.121 530.523,500.137 538.602,507.053C558.02,523.778 590.618,534.719 626.986,539.936C622.763,509.237 610.347,479.643 590.193,454.754C578.372,464.506 566.949,476.1 556.148,489.762C560.372,477.629 565.673,465.865 572.022,454.584C526.498,388.764 451.692,387.006 396.388,423.375Z'
              style={{ fill: 'rgb(85,125,68)' }}
            />
            <path
              d='M626.958,539.936C622.933,510.369 611.254,481.854 592.404,457.561C590.562,457.531 588.747,457.504 586.904,457.504C576.274,466.66 565.928,477.346 556.148,489.762C559.919,478.905 564.567,468.303 570.095,458.127C526.526,461.387 484.035,477.205 448.489,504.842C453.336,505.608 459.544,507.705 467.056,511.701C501.156,529.787 524.939,537.696 538.432,535.457C530.184,529.108 493.531,506.231 510.199,493.221C521.878,484.121 530.523,500.137 538.602,507.053C558.02,523.778 590.618,534.719 626.958,539.936ZM568.026,694.764L568.763,694.112L567.771,694.678L568.026,694.764ZM387.601,577.438L387.686,577.807C388.479,581.067 389.33,584.354 390.237,587.586L390.549,588.635L391.626,592.348L392.165,594.076L393.525,598.272L393.752,599.037L395.197,603.262L395.651,604.508L397.267,608.903L397.437,609.385L399.024,613.494L399.733,615.223L401.292,618.994L401.632,619.787L403.588,624.266L403.673,624.436L404.807,626.959L405.629,628.688L406.649,630.785L408.095,633.762L409.201,635.973L410.646,638.75L412.375,641.983L413.197,643.514L415.182,647.028L415.891,648.246L417.988,651.819L418.838,653.237L420.964,656.694L421.787,657.969L424.054,661.457L424.99,662.873L427.087,665.963L428.278,667.664L430.46,670.754L431.651,672.399L434.174,675.772L434.712,676.481L437.405,679.938L438.539,681.328L441.119,684.473L442.054,685.637C443.046,686.799 444.039,687.961 445.059,689.123L445.739,689.916C446.816,691.135 447.894,692.383 448.999,693.573L449.623,694.281L450.813,695.557C490.441,700.375 533.67,691.248 571.257,666.531C580.13,660.662 590.788,645.922 601.163,656.44L601.305,656.553C608.391,645.498 614.089,633.905 618.397,621.942C567.09,627.356 515.557,626.59 470.315,619.248C444.945,615.11 441.516,599.264 468.927,603.375C478.933,604.848 494.807,602.61 500.76,597.11C483.837,594.588 462.492,595.295 440.949,592.887C417.138,590.25 417.96,573.213 441.998,575.483C477.175,578.77 497.415,577.494 502.688,571.655C480.945,569.983 461.585,567.658 444.577,564.682C407.981,558.246 409.853,533.727 448.233,542.487C479.585,549.658 499.002,552.01 506.542,549.573C506.542,549.573 498.464,544.328 457.928,528.596C446.646,524.203 439.985,518.647 437.547,513.942C426.832,523.438 416.883,534.067 407.868,545.86C400.102,555.979 393.383,566.553 387.601,577.438Z'
              style={{ fill: 'rgb(0,61,110)' }} />
          </g>
        </g>
      </g>
    </svg>

  )
}

export default Logo
