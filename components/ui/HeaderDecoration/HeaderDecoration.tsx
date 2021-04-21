import Link from 'next/link'

type Props = {
  className?: string
}

const HeaderDecoration = ({className}: Props) => {
  return (
    <svg
      className={className}
      width={640}
      height={784}
      fill="none"
      viewBox="0 0 640 784"
      aria-hidden="true"
    >
      <defs>
        <pattern
          id="4f4f415c-a0e9-44c2-9601-6ded5a34a13e"
          x={118}
          y={0}
          width={20}
          height={20}
          patternUnits="userSpaceOnUse"
        >
          <circle cx={4} cy={4} r={4} className="text-gray-200" fill="currentColor" />
        </pattern>
      </defs>
      <rect y={72} width={640} height={640} className="text-gray-50" fill="currentColor" />
      <rect x={118} width={404} height={780} fill="url(#4f4f415c-a0e9-44c2-9601-6ded5a34a13e)" />
    </svg>
 )
}

export default HeaderDecoration
