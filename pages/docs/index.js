import React from "react";
import Layout from "../../components/Layout";
import Link from "next/link";

export default function index() {
  return (
    <Layout>
      <h1 className="md:text-2xl text-xl md:mb-5 mb-2">Kuaas REST API</h1>
      <code>http://kuaas.com/api/v1</code>
      <table class="table-auto">
        <thead>
          <tr>
            <th class="px-4 py-2">Param</th>
            <th class="px-4 py-2">Desc</th>
            <th class="px-4 py-2">Value</th>
            <th class="px-4 py-2">Example</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="border px-4 py-2">
              http://kuaas.com/api/v1/
              <code className="bg-indigo-500 text-gray-100">$NAME</code>
            </td>
            <td class="border px-4 py-2">
              Name of the person you're sending kudos to
            </td>
            <td class="border px-4 py-2">String</td>
            <td class="border px-4 py-2">http://kuaas.com/api/v1/John</td>
          </tr>
          <tr>
            <td class="border px-4 py-2">
              http://kuaas.com/api/v1/
              <code className="bg-indigo-500 text-gray-100">$NAME</code>/
              <code className="bg-indigo-500 text-gray-100">$SUBJECT</code>
            </td>
            <td class="border px-4 py-2">Subject or reason</td>
            <td class="border px-4 py-2">
              <ul>
                <li>Good Work</li>
                <li>Achievement</li>
                <li>Lead the way</li>
                <li>New project</li>
                <li>Team player</li>
                <li>custom</li>
                <i>
                  Note: if you're sending a custom value
                  <br />
                  you need to also send a{" "}
                  <code className="bg-gray-300 text-gray-900">
                    customMessage
                  </code>{" "}
                  query param
                </i>
              </ul>
            </td>
            <td class="border px-4 py-2">
              http://kuaas.com/api/v1/John/greatWork
            </td>
          </tr>
        </tbody>
      </table>

      <h1 className="md:text-2xl text-xl md:mb-5 mb-2 mt-4">Query Params</h1>

      <table class="table-auto">
        <thead>
          <tr>
            <th class="px-4 py-2">Param</th>
            <th class="px-4 py-2">Desc</th>
            <th class="px-4 py-2">Value</th>
            <th class="px-4 py-2">Example</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="border px-4 py-2">
              <code className="bg-gray-300 text-gray-900">gif</code>
            </td>
            <td class="border px-4 py-2">Value to provide back a gif</td>
            <td class="border px-4 py-2">Boolean</td>
            <td class="border px-4 py-2">
              http://kuaas.com/api/v1/John/greatWork
              <code className="bg-gray-300 text-gray-900">?gif=true</code>
            </td>
          </tr>
          <tr>
            <td class="border px-4 py-2">
              <code className="bg-gray-300 text-gray-900">gifTag</code>
            </td>
            <td class="border px-4 py-2">Tag to filter the response gif</td>
            <td class="border px-4 py-2">String</td>
            <td class="border px-4 py-2">
              http://kuaas.com/api/v1/John/greatWork
              <code className="bg-gray-300 text-gray-900">
                ?gif=true&gifTag=cake
              </code>
            </td>
          </tr>
          <tr>
            <td class="border px-4 py-2">
              <code className="bg-gray-300 text-gray-900">customMessage</code>
            </td>
            <td class="border px-4 py-2">
              If the subject sent doesn't match with the list of subject it will
              print this message
            </td>
            <td class="border px-4 py-2">String</td>
            <td class="border px-4 py-2">
              http://kuaas.com/api/v1/John/custom
              <code className="bg-gray-300 text-gray-900">
                ?gif=true&customMessage=Happy%20birthday&gifTag=cake
              </code>
            </td>
          </tr>
        </tbody>
      </table>
      <div className="block w-full text-center text-indigo-400 hover:text-indigo-600 mt-4">
        <Link href="/">Go back</Link>
      </div>
    </Layout>
  );
}
