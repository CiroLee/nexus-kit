export async function getGithubCode(url: string, options?: RequestInit) {
  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      // detail error info
      const errorData = await response.json().catch(() => ({}));
      throw new Error(`GitHub API failed: ${response.status} ${response.statusText}\n` + `detail: ${JSON.stringify(errorData)}`);
    }

    if (response.headers.get('content-type')?.includes('application/octet-stream')) {
      const buffer = Buffer.from(await response.arrayBuffer());
      return buffer.toString('base64');
    }

    return await response.text();
  } catch (error) {
    console.error(error);
    return '';
  }
}
export function getExampleCode(filePath: string) {
  const url = `https://api.github.com/repos/CiroLee/${process.env.GITHUB_REPO}/contents/src/app/${filePath}/page.tsx`;
  return getGithubCode(url, {
    headers: {
      Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      Accept: 'application/vnd.github.raw',
    },
    next: { revalidate: 3600 },
  });
}

export function getSourceCode(name: string) {
  const env = process.env.NODE_ENV;
  const url = `https://api.github.com/repos/CiroLee/nexus-kit/contents/src/components/ui/${name}${env === 'development' ? '/?ref=dev' : ''}`;
  return getGithubCode(url, {
    headers: {
      Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      Accept: 'application/vnd.github.raw',
    },
    next: { revalidate: 3600 },
  });
}
