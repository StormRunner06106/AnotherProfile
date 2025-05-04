"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { ExternalLink, ChevronRight } from "lucide-react"
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://xlnjnzmlrizfhwevgvkw.supabase.co'
const supabaseKey = process.env.SUPABASE_KEY
const supabase = createClient(supabaseUrl, supabaseKey)

export default function Posts() {
    const [postData, setPostData] = useState([]);
    useEffect(() => {
        console.log(process.env.SUPABASE_KEY);
        const fecthData = async () => {
            let { data: personalsite_projects, error } = await supabase
            .from('personalsite_projects')
            .select()
            console.log(personalsite_projects);
            setPostData(personalsite_projects);
        }
        fecthData();
      }, []);
    return (
        <section id="posts" className="pt-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
            <h2 className="section-title">
                <span className="section-highlight">Posts</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    postData.map((post, index) => (
                        <motion.div
                            key={post.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <div className="glass-card rounded-2xl h-full flex flex-col hover:shadow-lg transition-shadow duration-300 blur-effect">
                                <div className="p-0">
                                    <img src={post.image_url} alt={post.title} className="object-cover w-full h-64" />
                                </div>
                                <div className="p-6">
                                    <div className="flex justify-between items-start mb-4">
                                        <div>
                                            <h3 className="text-xl font-semibold text-slate-800">{post.title}</h3>
                                            <p className="text-slate-600 mt-1">{post.description.split(250)}</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-auto p-6 pt-0">
                                    <a
                                        href={post.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 text-sky-600 hover:text-sky-700 transition-colors text-sm"
                                    >
                                        <ExternalLink className="h-4 w-4" />
                                        <span>View Articles</span>
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))
                }
            </div>
        </motion.div>
        </section>
    )
}