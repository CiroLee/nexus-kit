import SectionIntro from '@/components/business/SectionIntro';
import PreviewAndCode from '@/components/business/PreviewAndCode';
import Code from '@/components/business/Code';
import CodeDrawer from '@/components/business/CodeDrawer';
import OnThisPage, { AnchorItem } from '@/components/business/OnThisPage';
import { Timeline, TimelineIndicator, TimelineItem, TimelineContent, TimelineTitle } from '@/components/ui/Timeline';
import { Avatar } from '@/components/ui/Avatar';
import Tag from '@/components/ui/Tag';
import { IconCheck } from '@tabler/icons-react';
import sourceCode from '@/codes/sources/source.timeline';
import { defaultCode, colorsCode, customIndicatorCode } from '@/codes/demos/code.timelines';

const navList: AnchorItem[] = [
  { anchorId: 'default', label: 'default' },
  { anchorId: 'colors', label: 'colors' },
  { anchorId: 'custom-indicator', label: 'custom indicator' },
];

export default function TimelinePage() {
  return (
    <div className="flex">
      <div className="main-container">
        <SectionIntro title="Timeline" description="Timeline is used to display a series of events in chronological order" />
        <CodeDrawer code={sourceCode} />
        <PreviewAndCode anchorId="default" title="default" codeText={defaultCode} code={<Code code={defaultCode} />}>
          <Timeline className="max-w-120">
            <TimelineItem>
              <TimelineIndicator />
              <TimelineContent>
                <TimelineTitle>2005 | Discovery</TimelineTitle>
                <div className="text-sm">
                  <p>Bought my first Harry Potter with crumpled allowance bills.</p>
                  <p className="text-description italic">Magic wasn’t just in spells—it was in believing I could be more than the shy kid in row three.</p>
                </div>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineIndicator />
              <TimelineContent>
                <TimelineTitle>2012 | Escape</TimelineTitle>
                <div className="text-sm">
                  <p>Read it under desk lamps during math class, pages dog-eared at Hermione’s speeches.</p>
                  <p className="text-description italic">Hogwarts letters never came, but her courage became my Patronus.</p>
                </div>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineIndicator />
              <TimelineContent>
                <TimelineTitle>2018 | Transition</TimelineTitle>
                <div className="text-sm">
                  <p>Packed it in my suitcase across oceans, spine cracked from rereading homesickness.</p>
                  <p className="text-description italic">The Sorting Hat never asked if muggles get lonely abroad.</p>
                </div>
              </TimelineContent>
            </TimelineItem>
          </Timeline>
        </PreviewAndCode>
        <PreviewAndCode anchorId="colors" title="colors" codeText={colorsCode} code={<Code code={colorsCode} />}>
          <Timeline className="max-w-120">
            <TimelineItem>
              <TimelineIndicator colors="primary" />
              <TimelineContent>
                <TimelineTitle>primary</TimelineTitle>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineIndicator colors="secondary" />
              <TimelineContent>
                <TimelineTitle>secondary</TimelineTitle>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineIndicator colors="warning" />
              <TimelineContent>
                <TimelineTitle>warning</TimelineTitle>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineIndicator colors="danger" />
              <TimelineContent>
                <TimelineTitle>secondary</TimelineTitle>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineIndicator colors="neutral" />
              <TimelineContent>
                <TimelineTitle>neutral</TimelineTitle>
              </TimelineContent>
            </TimelineItem>
          </Timeline>
        </PreviewAndCode>
        <PreviewAndCode anchorId="custom-indicator" title="custom indicator" codeText={customIndicatorCode} code={<Code code={customIndicatorCode} />}>
          <Timeline className="max-w-120">
            <TimelineItem>
              <TimelineIndicator styles="none" className="size-6">
                <Avatar className="size-full" src="/images/avatar-1.png" />
              </TimelineIndicator>
              <TimelineContent>
                <TimelineTitle className="leading-normal">Nio created the Sass project</TimelineTitle>
                <p className="text-description text-sm">At 12th April 2024, 10:00 am</p>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineIndicator styles="none" className="size-6">
                <Avatar className="size-full" src="/images/avatar-2.png" />
              </TimelineIndicator>
              <TimelineContent>
                <TimelineTitle className="leading-normal">Brown pushed a commit to the hub</TimelineTitle>
                <p className="text-description text-sm">At 12th April 2024, 4:00 pm</p>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineIndicator styles="none" className="size-6">
                <Avatar className="size-full" src="/images/avatar-3.png" />
              </TimelineIndicator>
              <TimelineContent>
                <TimelineTitle className="leading-normal">
                  Sara changed the status to{' '}
                  <Tag colors="primary" className="h-5 font-normal">
                    In progress
                  </Tag>
                </TimelineTitle>
                <p className="text-description text-sm">At 13th April 2024, 11:20 am</p>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineIndicator styles="none" colors="secondary" className="size-6">
                <IconCheck size={16} color="white" />
              </TimelineIndicator>
              <TimelineContent>
                <TimelineTitle className="leading-normal">
                  manager A** change the status to{' '}
                  <Tag colors="secondary" className="h-5 font-normal">
                    Approved
                  </Tag>
                </TimelineTitle>
                <p className="text-description text-sm">At 13th April 2024, 1:20 pm</p>
              </TimelineContent>
            </TimelineItem>
          </Timeline>
        </PreviewAndCode>
      </div>
      <OnThisPage list={navList} />
    </div>
  );
}
