import { ActivityCalendar, type ThemeInput } from 'react-activity-calendar'
import contributionData from '@/generated/github-contributions.json'
import { cn } from '@/lib/utils'
import { githubProfiles } from '@/lib/site-data'

const calendarTheme: ThemeInput = {
  light: ['#ebedf0', '#ffddd6', '#f4a89a', '#e85d4c', '#c24133'],
  dark: ['#ebedf0', '#ffddd6', '#f4a89a', '#e85d4c', '#c24133'],
}

type ContributionProfile = (typeof contributionData.profiles)[number]

function ProfileGraph({
  profile,
  year,
  className,
}: {
  profile: ContributionProfile
  year: number
  className?: string
}) {
  const meta = githubProfiles.find((item) => item.username === profile.username)

  return (
    <div className={cn('flex flex-col gap-2', className)}>
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <a
          href={meta?.href ?? `https://github.com/${profile.username}`}
          className="text-sm font-medium underline underline-offset-4 transition-colors hover:decoration-accent-spot"
          target="_blank"
          rel="me noreferrer"
        >
          @{profile.username}
        </a>
        <span className="text-xs text-muted-foreground">
          {profile.total.toLocaleString()} in {year}
        </span>
      </div>
      <div className="-mx-1 overflow-x-auto pb-1">
        <ActivityCalendar
          data={profile.contributions}
          theme={calendarTheme}
          colorScheme="light"
          blockSize={10}
          blockMargin={3}
          fontSize={12}
          showWeekdayLabels
          labels={{
            totalCount: '{{count}} contributions in {{year}}',
          }}
        />
      </div>
    </div>
  )
}

export function GitHubContributionGraphs({ className }: { className?: string }) {
  const year = contributionData.year
  const combinedTotal = contributionData.profiles.reduce(
    (sum, profile) => sum + profile.total,
    0,
  )

  return (
    <div className={cn('flex flex-col gap-4', className)}>
      <p className="text-sm text-muted-foreground">
        {combinedTotal.toLocaleString()} contributions across both accounts in{' '}
        {year}.
      </p>
      {contributionData.profiles.map((profile) => (
        <ProfileGraph key={profile.username} profile={profile} year={year} />
      ))}
    </div>
  )
}
